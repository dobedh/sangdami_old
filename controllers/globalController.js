export const home = (req, res) => res.render("home")


// Login
export const getLogin = (req, res) => res.render("login")

export const postLogin = (req, res) => {
    const {
        body : {email, password}
    } = req;
    res.redirect(routes.home)
}