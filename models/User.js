import mongoose from "mongoose"
import passportLocalMongoose from "passport-local-mongoose";


const UserSchema = new mongoose.Schema({
    email : String,
    name : String,
    avatarUrl : String,
    facebookId : Number,
    googleId : Number,
    kakaoId : Number
})

UserSchema.plugin(passportLocalMongoose, { usernameField: "email" });

const model = mongoose.model("User", UserSchema)

export default model