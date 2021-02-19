import passport from "passport"
import User from "../models/User"
import routes from "../routes"

export const home = (req, res) => res.render("home")


// Login
export const getLogin = (req, res) => res.render("login")

export const postLogin = passport.authenticate("local", {
      failureRedirect : routes.login,
      successRedirect : routes.home
    });

// Join
export const getJoin = (req, res) => {
    res.render("join")
}


export const postJoin = async (req, res, next) => {
    const {
      body: { name, email, password, password2 },
    } = req;
    if (password !== password2) {
      res.status(400);
      res.render("Join", { pageTitle: "Join" });
    } else {
      try {
        const user = await User({
          name,
          email,
        });
        await User.register(user, password);
        next()
      } catch (error) {
        console.log(error);
        res.redirect(routes.home);
      }
    }
  };


export const logout = (req, res) => {
  req.user = null
  res.redirect(routes.home)
}