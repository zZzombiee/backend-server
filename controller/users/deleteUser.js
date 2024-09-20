const users = [
  { id: 1, firstName: "John", lastName: "Doe" },
  { id: 2, firstName: "James", lastName: "Bond" },
];

exports.deleteUser = (request, response) => {
  const { id } = request.params;
  users.splice(Number(id - 1), Number(id));
  console.log(users);
  response.status(200).send(users);
};
