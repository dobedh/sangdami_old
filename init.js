import app from "./app";

const PORT = 7000;

const handleInit = (req, res) => console.log(`Listening https://localhost:${PORT}`)

app.listen(PORT, handleInit)
