import dotenv from "dotenv";
dotenv.config();

import app from "./app";
import "./db"

import "./models/Community";
import "./models/User"

const PORT = process.env.PORT || 9000;

const handleInit = () => console.log(`✅  Listening https://localhost:${PORT}`)

app.listen(PORT, handleInit)
