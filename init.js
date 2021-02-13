import app from "./app";
import "./db"
import dotenv from "dotenv";
dotenv.config();
import "./models/Community";
import "./models/User"
import passport from "passport"

const PORT = process.env.PORT || 9000;

const handleInit = (req, res) => console.log(`Listening https://localhost:${PORT}`)

app.listen(PORT, handleInit)
