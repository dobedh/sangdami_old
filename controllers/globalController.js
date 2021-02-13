import User from "../models/User"
import routes from "../routes"

export const home = (req, res) => res.render("home")


// Login
export const getLogin = (req, res) => res.render("login")

export const postLogin = (req, res) => {
    const {
        body : {email, password}
    } = req;
    res.redirect(routes.home)
}


// Join
export const getJoin = (req, res) => {
    res.render("join")
}


export const postJoin = async (req, res) => {
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
      } catch (error) {
        console.log(error);
      }
      res.redirect(routes.home);
    }
  };