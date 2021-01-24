import express from "express"

const app = express()

const globalRouter = (req, res) => res.send("Hi Sangdami :)");
const supervisionRouter = (req, res) => res.send("Supervision Recommend!");
const jobRouter = (req, res) => res.send("Job review!");
const communityRouter = (req, res) => res.send("Community!")

app.get("/", globalRouter)
app.get("/supervision", supervisionRouter)
app.get("/job", jobRouter)
app.get("/community", communityRouter)

export default app;