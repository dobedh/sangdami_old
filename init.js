import dotenv from "dotenv";
import app from "./app";
import passport from "passport"

dotenv.config();

import "./db"
import "./models/Community";
import "./models/User"

const PORT = process.env.PORT || 9000;

const handleInit = (req, res) => console.log(`Listening https://localhost:${PORT}`)

app.listen(PORT, handleInit)
