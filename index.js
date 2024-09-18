import express from "express";

const app = express();

app.use(express.json());

const port = 8080;

app.get("/articles", (request, response) => {
  response.send("Hello Response From Express");
});

app.post("/addArticles", (request, response) => {
  console.log(request);
  const { title } = request.body;
  response.send(`Product successfully added ${title}`);
});

app.listen(port, () => {
  console.log(`server running at a http://localhost:${port}`);
});
