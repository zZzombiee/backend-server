const comments = [
  {
    id: 1,
    like: 30,
    message: "medeelel awii",
    createdTime: "Fri Sep 20 2024 09:22:03 GMT+0800",
  },
  {
    id: 2,
    like: 10,
    message: "dugaaraa uldeegeerei",
    createdTime: "Fri Sep 22 2024 09:22:03 GMT+0800",
  },
];

exports.getComments = (request, response) => {
  response.status(200).json({ messages: "all comments", comments: comments });
};
