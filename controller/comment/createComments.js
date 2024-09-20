const comments = [
  {
    userId: 1,
    id: 1,
    like: 30,
    message: "medeelel awii",
    createdTime: "Fri Sep 20 2024 09:22:03 GMT+0800",
  },
  {
    userId: 1,
    id: 2,
    like: 10,
    message: "dugaaraa uldeegeerei",
    createdTime: "Fri Sep 22 2024 09:22:03 GMT+0800",
  },
];

exports.CreateComments = (request, response) => {
  console.log(request.body);
  comments.push({ ...request.body });
  response
    .status(200)
    .json({ message: "created new comment", comments: comments });
};
