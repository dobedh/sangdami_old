import mongoose, { Mongoose } from "mongoose"

const CommunitySchema = new mongoose.Schema({
    title : {
        type : String,
        required : "Title is required"
    },
    description : String,
    views : {
        type : Number,
        default : 0
}});

const model = mongoose.model("Community", CommunitySchema);

export default model;