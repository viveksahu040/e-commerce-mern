import mongoose, { Schema } from "mongoose";
import bcrypt from "bcryptjs"

const userSchema = new mongoose.Schema({
    name:{
        type:String,
        require:[true,"Name is required"]
    },
    email:{
        type:String,
        require:[true,"Email is required"],
        unique:[true,"Email already exists"],
        lowercase:true,
        trim : true,
        match:[/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,"Please enter a valid email"]},
    password:{
        type:String,
        require:[true,"Password is required"],
        trim:true,
        minLength:[6,"Password must be at least 6 characters"],
        //select:false
    },
   cartItems:[
    {
        quantity:{
            type:Number,
            default:1
        },
        product:{
            type:Schema.Types.ObjectId,
            ref:"Product"
        }
    }
   ],
   role:{
    type:String,
    enum:["customer","admin"],
    default:"customer"
   }
    },
    {
        timestamps:true
    })



 // pre shave hookk to hash the password before saving into the database 
  userSchema.pre("save",async function(next){
    if(!this.isModified("password")) return next();

    try {
        const salt = await bcrypt.genSalt(10);
        this.password = await bcrypt.hash(this.password,salt);
        next();
    } catch (error) {
        next(error);
    }
  });

  userSchema.methods.comparePassword = async function(password){
    return await bcrypt.compare(password,this.password);
  }

  const User = mongoose.model("User",userSchema);

  export default User;