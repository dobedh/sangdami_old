import express from "express";
import { home, getLogin, postLogin } from "../controllers/globalController";
import routes from "../routes";

const globalRouter = express.Router();

// Home
globalRouter.get(routes.home, home);
globalRouter.post(routes.home, home);

// Login
globalRouter.get(routes.login, getLogin);
globalRouter.post(routes.login, postLogin)

export default globalRouter;