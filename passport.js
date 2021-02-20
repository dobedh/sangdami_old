import dotenv from "dotenv";
dotenv.config()
import passport from "passport";
import User from "./models/User";
import KakaoStrategy from "passport-kakao"
import { kakaoLoginCallback } from "./controllers/globalController";

passport.use(User.createStrategy());

passport.use(new KakaoStrategy({
    clientID : process.env.KAKAO_ID,
    callbackURL : "https://loacalhost:9000/oauth"
  },
  kakaoLoginCallback
))

passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());
