import express from "express"
import communityRouter from "./routers/communityRouter";
import globalRouter from "./routers/globalRouter";
import jobRouter from "./routers/jobRouter";
import routes from "./routes";

const app = express()

app.set("view engine", "pug")

app.use(routes.home, globalRouter)
app.use(routes.community, communityRouter)
app.use(routes.job, jobRouter)

export default app;