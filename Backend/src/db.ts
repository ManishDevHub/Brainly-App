import mongoose, { model,Schema } from "mongoose";

mongoose.connect("mongodb+srv://ramuk13476:ZyAH1VK00i9LA4Yb@cluster0.2kyl22s.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")
const UserSchema = new Schema
({
    username: {type: String , unique: true, } ,
    password: String ,
})

const ContentSchema = new Schema({
    title: String,
    link: String ,
    tags: [{ type:mongoose.Types.ObjectId , ref:'Tag'}] ,
    userId: {type:mongoose.Types.ObjectId , ref:'User' , required:true}
})

export const ContentModal = model("Content" , ContentSchema)
 export const UserModal =  model("User", UserSchema );
  