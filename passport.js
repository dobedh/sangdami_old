import dotenv from "dotenv";
dotenv.config()
import passport from "passport";
import User from "./models/User";
import KakaoStrategy from "passport-kakao"
import FacebookStrategy from "passport-facebook"
import { kakaoLoginCallback } from "./controllers/globalController";

passport.use(User.createStrategy());

passport.use(new FacebookStrategy({
  clientID: process.env.FACEBOOK_APP_ID,
  clientSecret: process.env.FACEBOOK_APP_SECRET,
  callbackURL: "http://localhost:3000/auth/facebook/callback"
},
function(accessToken, refreshToken, profile, cb) {
  User.findOrCreate({ facebookId: profile.id }, function (err, user) {
    return cb(err, user);
  });
}
));

passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());
