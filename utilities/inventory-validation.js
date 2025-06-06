const { body, validationResult } = require("express-validator")
const utilities = require(".")

const validateClassification = [
  body("classification_name")
    .trim()
    .isLength({ min: 1 })
    .withMessage("Please provide a classification name.")
    .matches(/^[A-Za-z0-9]+$/)
    .withMessage("Classification must not contain spaces or special characters."),
  
  async (req, res, next) => {
    const errors = validationResult(req)
    if (!errors.isEmpty()) {
      let nav = await utilities.getNav()
      res.render("inventory/add-classification", {
        title: "Add Classification",
        nav,
        messages: req.flash("error", "Classification validation failed."),
        errors: errors.array(),
      })
      return
    }
    next()
  }
]

module.exports = {
  checkClassificationName: validateClassification
}