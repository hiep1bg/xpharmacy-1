const express = require('express');
const router = express.Router();
const { register, getAllUsers, getOneUser } = require("./controller");

router.post("/", (req, res) => {
    register(req.body)
    .then(id => res.send(id))
    .catch(err => {
        res.status(500).send(err);
    })
});

router.get("/", (req, res) => {
    getAllUsers(req.query.page || 1)
    .then(users => res.status(200).json(users))
    .catch(err => res.status(500).send(err));
});

router.get("/:id", (req, res) => {
    getOneUser(req.params.id, req.body.password)
    .then(user => res.status(200).json(user))
    .catch(err => res.status(500).send(err));
});


module.exports = router;