const mongoose = require("mongoose");
const express = require("express");
const path = require("path");
const app = express();
const PORT = 3000;
const cors = require("cors");
const paypalRoutes = require("./routes/paypalRoutes.js");
const paypalFlightRoutes = require("./routes/paypalFlightRoutes.js");
const FlightListingsModel = require("./models/flightlistings.js");
const ListingsModel = require("./models/listings.js");
const User = require("./models/user.js");
const userRouter = require("./routes/user.js");
const cookieParser = require("cookie-parser");
const session = require("express-session");
const passport = require("passport");
const LocalStrategy = require("passport-local");
const flash = require("connect-flash");
app.use(express.urlencoded({ extended: true }));
app.use("/api/paypal", paypalRoutes);
app.use("/api/paypal/flight", paypalFlightRoutes);
app.use(cors());
app.use(express.json());
app.use(cookieParser());
app.use(
  session({
    secret: process.env.SECRET,
    resave: false,
    saveUninitialized: true,
    cookie: {
      expires: Date.now() + 24 * 60 * 60 * 1000,
      maxAge: 24 * 60 * 60 * 1000,
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
app.use(express.static("public"));
app.use(flash());
app.use((req, res, next) => {
  res.locals.currentUser = req.user;
  res.locals.success = req.flash("success");
  res.locals.error = req.flash("error");
  next();
});
mongoose
  .connect("mongodb://localhost:27017/realestateDB")
  .then(() => console.log("Connected to realestateDB"))
  .catch((err) => console.log("MongoDB Error:", err));
const flightConnection = mongoose.createConnection(
  "mongodb://localhost:27017/flightDB"
);
flightConnection.on("connected", () => {
  console.log("Connected to flightDB");
});
app.get("/", (req, res) => {
  req.session.user = {
    username: "Aadithya",
    role: "visitor",
  };
  res.send("Session started!");
});
app.get("/api/payments", (req, res) => {
  res.render("payments"); 
});
app.get('/api/flight/payments',(req,res)=>{
  res.render("Flightpayments");
});
app.get("/api/listings", async (req, res) => {
  const listings = await ListingsModel.find({});
  res.render("listings", { listings });
});
app.get("/api/flightListings", async (req, res) => {
  try {
    const { from, to } = req.query;
    let query = {};
    if (from && to) {
      query = {
        departure: { $regex: from, $options: "i" }, 
        arrival: { $regex: to, $options: "i" }
      };
    }
    const flightListings = await FlightListingsModel.find(query);
    res.render("flightListings", { flightListings });
  } catch (error) {
    console.error("Flight Search Error:", error);
    res.render("flightListings", { flightListings: [] });
  }
});
app.get("/signup", (req, res) => {
  res.render("signup");
});
app.get("/login", (req, res) => {
  res.render("login");
});
app.post("/users/signup", async (req, res) => {
  try {
    let { username, email, password } = req.body;
    const newUser = new User({ username, email });
    await User.register(newUser, password);
    req.flash("success", "Welcome to StaySphere!!!");
    return res.redirect("/login");
  } catch (err) {
    console.log(err);
    req.flash("error", err.message);
    return res.redirect("/signup");
  }
});

app.post( "/login", passport.authenticate("local", {
    failureRedirect: "/signup",
    failureFlash: true,
  }),
  (req, res) => {
    req.flash("success", "You are successfully Logged In");
    res.redirect("/api/listings");
  }
);
app.get("/logout", (req, res, next) => {
  req.logout(function (err) {
    if (err) return next(err);
    req.flash("success", "Logged out successfully");
    res.redirect("/login");
  });
});
app.use("/", userRouter);
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
