const { body } = require("express-validator");

module.exports = {
  create: [
    body("firstName").exists(),
    body("firstName").isString(),
    body("firstName").notEmpty(),
    body("lastName").exists(),
    body("lastName").isString(),
    body("lastName").notEmpty(),
    body("email").exists(),
    body("email").isString(),
    body("email").notEmpty(),
    body("email").isEmail(),
    body("password").exists(),
    body("password").isString(),
    body("password").notEmpty(),
  ],
  login: [
    body("email").exists(),
    body("email").isString(),
    body("email").notEmpty(),
    body("email").isEmail(),
    body("password").exists(),
    body("password").isString(),
    body("password").notEmpty(),
  ],
};
