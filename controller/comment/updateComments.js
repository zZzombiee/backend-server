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

exports.updateComments = (request, response) => {
  const { id } = request.params;
  const { body } = request;

  comments.map((comment) => {
    if (comment.id === Number(id)) {
      comment.message = body.message;
      return comment;
    }
  });
  for (let i = 0; i < comments.length; i++) {
    if (Number(id) === comments[i].id) {
      response
        .status(200)
        .send({ message: `updated id:${id} comment`, comments: comments });
    }
  }
  response.status(400).send({ message: `id:${id} is not find` });
};
