const express = require("express");
const router = new express.Router();
const utilities = require("../utilities/");
const accountController = require("../controllers/accountController");

// Route to build login view
router.get("/login", utilities.handleErrors(accountController.buildLogin));

// GET /account/register
router.get("/register", utilities.handleErrors(accountController.buildRegister));

// Process registration data
router.post('/register', utilities.handleErrors(accountController.registerAccount))

module.exports = router;