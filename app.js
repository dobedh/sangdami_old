import express from "express";
import morgan from "morgan";
import helmet from "helmet";
import bodyParser from "body-parser";
import cookieParser from "cookie-parser"
import routes from "./routes";
import globalRouter from "./routers/globalRouter";
import communityRouter from "./routers/communityRouter";
import jobRouter from "./routers/jobRouter";

import { localMiddleware }  from "./localMiddleware";

const app = express()

// Middlewares
app.use(helmet())
app.use(morgan("dev"))
app.use(bodyParser.json())
app.use(cookieParser())
app.use(bodyParser.urlencoded({extended : true}))
app.set("view engine", "pug")
app.use(localMiddleware)

//Routers
app.use(routes.home, globalRouter)
app.use(routes.community, communityRouter)
app.use(routes.job, jobRouter)

export default app;