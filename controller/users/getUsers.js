const users = require("../../db/user");

exports.getUsers = (request, response) => {
  response.status(200).json({ users: users });
};
