const User = require("../db/models/User");

module.exports = {
  addNewUser: (data) => {
    return new Promise((resolve, reject) => {
      let user = new User({
        firstName: data.firstName,
        lastName: data.lastName,
        username: data.email,
        password: data.password,
      });
      user
        .save()
        .then(() => {
          resolve();
        })
        .catch(() => {
          reject();
        });
    });
  },
  searchForUser: (data) => {
    return new Promise((resolve, reject) => {
      User.where("username")
        .equals(data.email)
        .where("password")
        .equals(data.password)
        .then((response) => {
          resolve(response);
        })
        .catch((err) => {
          reject(err);
        });
    });
  },
};
