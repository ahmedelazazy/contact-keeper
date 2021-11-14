const express = require("express");
const router = express.Router();

const auth = require("../middlewares/auth");
const { getUser, login } = require("../controllers/auth");
const { postRules, validatePost } = require("../validators/auth");

// @route    GET api/auth
// @desc     Get logged user
// @access   Private
router.get("/", auth, getUser);

// @route    POST api/auth
// @desc     Authenticate user & get token
// @access   Public
router.post("/", postRules, validatePost, login);

module.exports = router;
