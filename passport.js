import passport from "passport";
import User from "./models/User";

passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

passport.use(User.createStrategy());
