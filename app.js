import express from "express";
import morgan from "morgan";
import helmet from "helmet";
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";
import passport from "passport";
import session from "express-session";
import MongoStore from "connect-mongo";
import mongoose from "mongoose";
import dotenv from "dotenv"
import routes from "./routes";
import globalRouter from "./routers/globalRouter";
import communityRouter from "./routers/communityRouter";
import jobRouter from "./routers/jobRouter";
import { localMiddleware }  from "./localMiddleware";

dotenv.config()

import "./passport";

const app = express();
const CookieStore = MongoStore(session);

// Middlewares
app.use(helmet())
app.set("view engine", "pug")
app.use(cookieParser())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended : true}))
app.use(morgan("dev"))
app.use(
    session({
      secret: process.env.COOKIE_SECRET,
      resave: true,
      saveUninitialized: false,
      store: new CookieStore({ mongooseConnection: mongoose.connection }),
    })
  );

app.use(passport.initialize());
app.use(passport.session());

app.use(localMiddleware)

//Routers
app.use(routes.home, globalRouter)
app.use(routes.community, communityRouter)
app.use(routes.job, jobRouter)

export default app;