import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

mongoose.connect(
    process.env.MONGO_URL,
    {
        useNewUrlParser : true,
        userFindAndModify : false,
        useUnifiedTopology: true,
    }
);

const db = mongoose.connection;

const handleOpen = () => console.log("✅ DB Connected!")
const handleError = (error) => console.log(`Error in DB : ${error}`)

db.once("open", handleOpen)
db.on("error", handleError)