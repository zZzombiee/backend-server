const users = [
  { id: 1, firstName: "John", lastName: "Doe" },
  { id: 2, firstName: "James", lastName: "Bond" },
];

exports.updateUser = (request, response) => {
  const { id } = request.params;
  const { body } = request;

  const updatedUser = users.map((user) => {
    if (user.id === Number(id)) user.firstName = body.firstName;
    return user;
  });
  console.log(updatedUser);
  if (id) {
    response.status(200).send("successfully updated");
  } else {
    response.status(400).send(`user ${id} update failed `);
  }
};
