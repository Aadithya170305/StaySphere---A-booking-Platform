const mongoose=require("mongoose");
const initData=require("./data.js");
const listing=require("../models/listings.js");
main().then(()=>{
    console.log("connected to mongodb");
}).catch((err)=>{
    console.log("Error connecting to the mongodb");
});
async function main(){
    await mongoose.connect("mongodb://localhost:27017/realestateDB");
}
const initDB=async()=>{
    await listing.deleteMany({});
    await listing.insertMany(initData.data);
    console.log("Data inserted successfully");
};
initDB();