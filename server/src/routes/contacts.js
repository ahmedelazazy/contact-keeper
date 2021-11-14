const express = require("express");
const router = express.Router();

const auth = require("../middlewares/auth");
const { postRules, validatePost } = require("../validators/contacts");
const { getContacts, createContact, updateContact, deleteContact } = require("../controllers/contacts");

// @route    GET api/contacts
// @desc     Get all contacts
// @access   Private
router.get("/", auth, getContacts);

// @route    POST api/contacts
// @desc     Create a contact
// @access   Private
router.post("/", auth, postRules, validatePost, createContact);

// @route    PUT api/contacts/:id
// @desc     Update a contact
// @access   Private
router.put("/:id", auth, updateContact);

// @route    DELETE api/contacts/:id
// @desc     Delete a contact
// @access   Private
router.delete("/:id", auth, deleteContact);

module.exports = router;
