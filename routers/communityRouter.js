import express from "express";
import routes from "../routes"
import { contentList, newPost } from "../controllers/communityController";

const communityRouter = express.Router()

communityRouter.get("/", contentList)

communityRouter.get("/newpost", newPost)

export default communityRouter  