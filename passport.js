import dotenv from "dotenv";
dotenv.config()
import passport from "passport";
import User from "./models/User";
import KakaoStrategy from "passport-kakao"
import { kakaoLoginCallback } from "./controllers/globalController";

passport.use(User.createStrategy());

passport.use(new FacebookStrategy({
  clientID: FACEBOOK_APP_ID,
  clientSecret: FACEBOOK_APP_SECRET,
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
