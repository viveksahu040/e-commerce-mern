import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
name:{
    type:String,
    require:true
},
description:{
    type:String,
    require:true
},
price:{
    type:Number,
    require:true,
    min:0
},
category:{
    type:String,
    require:true
},
image:{
    type:String,
    require:true
},
isFeatured:{
    type:Boolean,
     default:false
    },
},{timestamps:true});

const Product = mongoose.model("Product",productSchema);

export default Product;