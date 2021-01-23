import express from "express"


const welcomeMessage = (req, res) => res.send("Welcome to Sangdami :)")

const init = (req, res) => welcomeMessage()

init()