const express = require("express");
const router = express.Router();

const { postRules, validatePost } = require("../validators/users");
const { register } = require("../controllers/users");

// @route    POST api/users
// @desc     Register user
// @access   Public
router.post("/", postRules, validatePost, register);

module.exports = router;
