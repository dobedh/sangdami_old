import express from "express";
import { contentList } from "../controllers/communityController";

const communityRouter = express.Router()

communityRouter.get("/", contentList)

export default communityRouter