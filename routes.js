// globla
const HOME = "/";

//uesrs
const USERS = "/user"
const LOGIN = "/login";
const LOGOUT = "/logout"
const JOIN = "/join"
const PROFILE = "/profile"

//community
const SUPERVISION = "/supervision"
const COMMUNITY = "/community"
const NEWPOST = "/community/newpost"

//facebook
const FB = "/auth/facebook"
const FB_CALLBACK = "/auth/facebook/callback"

//job
const JOB = "/job"

const routes = {
    home : HOME,
    users : USERS,
    login : LOGIN,
    join : JOIN,
    logout : LOGOUT,
    profile : PROFILE,
    supervision : SUPERVISION,
    community : COMMUNITY,
    newPost : NEWPOST,
    job : JOB,
    facebook : FB,
    facebookCallback : FB_CALLBACK
}

export default routes;