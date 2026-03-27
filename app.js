const express = require("express");
const mongoose = require("mongoose");
const path = require("path");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const session = require("express-session");
const passport = require("passport");
const LocalStrategy = require("passport-local");
const flash = require("connect-flash");
const paypalRoutes = require("./routes/paypalRoutes.js");
const paypalFlightRoutes = require("./routes/paypalFlightRoutes.js");
const userRouter = require("./routes/user.js");
const FlightListingsFactory = require("./models/flightlistings.js");
const ListingsModel = require("./models/listings.js");
const User = require("./models/user.js");
const app = express();
const PORT = process.env.PORT || 3000;
const MONGO_URL     = process.env.MONGO_URL     || "mongodb://mongo-db:27017/realestateDB";
const FLIGHT_DB_URL = process.env.FLIGHT_DB_URL || "mongodb://mongo-db:27017/flightDB";
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));
app.use(flash());
app.use(
  session({
    secret: process.env.SECRET || "thisshouldbeasecret",
    resave: false,
    saveUninitialized: false,
    cookie: {
      maxAge: 24 * 60 * 60 * 1000,
      httpOnly: true,
    },
  })
);
app.use(passport.initialize());
app.use(passport.session());
passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use((req, res, next) => {
  res.locals.currentUser = req.user;
  res.locals.success = req.flash("success");
  res.locals.error = req.flash("error");
  next();
});
mongoose
  .connect(MONGO_URL)
  .then(() => console.log("Connected to realestateDB"))
  .catch((err) => console.error("RealEstate DB Error:", err));
const flightConnection = mongoose.createConnection(FLIGHT_DB_URL);
const FlightListingsModel = FlightListingsFactory(flightConnection);
flightConnection.on("connected", () => console.log("Connected to flightDB"));
flightConnection.on("error", (err) => console.error("Flight DB Error:", err));
app.use("/api/paypal", paypalRoutes);
app.use("/api/paypal/flight", paypalFlightRoutes);
app.get("/", (req, res) => res.redirect("/api/listings"));

app.get("/api/listings", async (req, res) => {
  try {
    const listings = await ListingsModel.find({});
    res.render("listings", { listings });
  } catch (err) {
    console.error("Listings error:", err);
    res.render("listings", { listings: [] });
  }
});

app.get("/api/flightListings", async (req, res) => {
  try {
    const { from, to } = req.query;
    let query = {};
    if (from && to) {
      query = {
        departure: { $regex: from, $options: "i" },
        arrival:   { $regex: to,   $options: "i" },
      };
    }
    const flightListings = await FlightListingsModel.find(query);
    res.render("flightListings", { flightListings });
  } catch (error) {
    console.error("Flight Search Error:", error);
    res.render("flightListings", { flightListings: [] });
  }
});
app.get("/api/payments", (req, res) => res.render("payments"));
app.get("/api/flight/payments", (req, res) => res.render("Flightpayments"));
app.get("/api/signup", (req, res) => res.render("signup"));
app.get("/api/login",  (req, res) => res.render("login"));
app.post("/api/signup", async (req, res, next) => {
  try {
    const { username, email, password } = req.body;
    const newUser = new User({ username, email });
    await User.register(newUser, password);
    req.flash("success", "Account created successfully! Please log in.");
    res.redirect("/api/login");   
  } catch (err) {
    req.flash("error", err.message);
    res.redirect("/api/signup");
  }
});

app.post(
  "/api/login",
  passport.authenticate("local", {
    failureRedirect: "/api/login",   
    failureFlash: true,
  }),
  (req, res) => {
    req.flash("success", "You are successfully Logged In");
    res.redirect("/api/listings");
  }
);
app.get("/api/logout", (req, res, next) => {
  req.logout((err) => {
    if (err) return next(err);
    req.flash("success", "Logged out successfully");
    res.redirect("/api/login");    
  });
});
app.use("/", userRouter);
app.listen(PORT, "0.0.0.0", () => {
  console.log(`Server running on http://localhost:${PORT}`);
});