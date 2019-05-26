const express = require('express');
const router = express.Router();
const authController = require('./controller');

router.post("/login", (req, res) => {
    authController
    .login(req.body)
    .then(userInfo => {
        req.session.userInfo = userInfo;
        res.status(200).send("Login succes");
    }).catch(err => {
        res.status(501).send(err);
    })
});

router.get("/logout", (req, res) => {
    req.session.destroy();
    res.status(200).send("Log out success");
})
module.exports = router;