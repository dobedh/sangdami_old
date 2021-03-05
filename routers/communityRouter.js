import express from "express";
import routes from "../routes"
import { contentList, newPost, postNewItem } from "../controllers/communityController";

const communityRouter = express.Router()

communityRouter.get("/", contentList)

communityRouter.get("/newpost", newPost)
communityRouter.post("/newpost", postNewItem)

export default communityRouter  