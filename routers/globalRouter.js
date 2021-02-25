import express from "express";
import { home, getLogin, postLogin, getJoin, postJoin, logout, profile, kakaoLogin, kakaoCallback } from "../controllers/globalController";
import routes from "../routes";

const globalRouter = express.Router();

// Home
globalRouter.get(routes.home, home);
globalRouter.post(routes.home, home);

// Login
globalRouter.get(routes.login, getLogin);
globalRouter.post(routes.login, postLogin)


// Facebook
globalRouter.get(routes.facebook, kakaoLogin)
globalRouter.get(routes.facebookCallback, kakaoCallback)


// Join
globalRouter.get(routes.join, getJoin)
globalRouter.post(routes.join, postJoin)

//logout
globalRouter.get(routes.logout, logout)

//profile
globalRouter.get(routes.profile, profile)

export default globalRouter;