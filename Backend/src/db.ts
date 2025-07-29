import { Model,Schema } from "mongoose";

const UserSchema = new Schema
({
    username: {type: String , unique: true, } ,
    password: String ,
})

 export const UserModal = new Model(UserSchema ,"User"  );