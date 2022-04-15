const router = require("express").Router();
const UserController = require("../controllers/UserController");
const { validationResult } = require("express-validator");
const UserRouteValidations = require("../Helpers/Validators/UserRouteValidators");
const jwt = require("jsonwebtoken");

router.post("/create", ...UserRouteValidations.create, (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  UserController.addNewUser(req.body)
    .then(() => {
      res.status(200).json({ msg: "New user created successfully" });
    })
    .catch(() => {
      res
        .status(500)
        .json({ msg: "An error occured. Could not create new user" });
    });
});

router.post("/login", ...UserRouteValidations.login, (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  UserController.searchForUser(req.body)
    .then((data) => {
      if (data.length > 0) {
        jwt.sign(
          { email: req.body.email },
          process.env.JWT_SECRET,
          (err, token) => {
            if (err) {
              res
                .status(500)
                .json({ msg: "An error occured. Could not generate token" });
            } else {
              res
                .status(200)
                .json({ msg: "Authenticated successfully", token });
            }
          }
        );
      } else {
        throw Error("list empty...");
      }
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({ msg: "An error occured. Could not find user" });
    });
});

module.exports = router;
