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

exports.deleteComment = (request, response) => {
  const { id } = request.params;
  const filteredComments = comments.filter((comment) => {
    // if (Number(id) === comment.id) {}
    return comment.id !== Number(id);
  });
  if (filteredComments.length < comments.length) {
    response.status(200).send({
      message: `Deleted id:${id} comment`,
      comments: filteredComments,
    });
  } else {
    response.status(400).send("Error: Comment not found");
  }
};
