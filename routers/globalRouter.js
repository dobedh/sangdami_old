import express from "express";
import { home, login } from "../controllers/globalController";
import routes from "../routes";

const globalRouter = express.Router()

globalRouter.get(routes.home, home)

globalRouter.get(routes.login, login)

export default globalRouter