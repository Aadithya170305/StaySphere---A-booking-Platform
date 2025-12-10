const mongoose = require('mongoose');
const Schema=mongoose.Schema;
const Listings=new Schema({
    title:String,
    description:String,
    image: {
        filename: String,
        url: String
    },
    price:Number,
    location:String,
    country:String,
    reviews:Number
});
const ListingsModel=mongoose.model('listings',Listings);
module.exports=ListingsModel;