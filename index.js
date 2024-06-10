const express = require('express');
const { createConnection } = require('typeorm');
const bodyParser = require('body-parser');
const Post = require('./entity/Post');

const app = express();
const PORT = process.env.PORT || 8000;

app.use(bodyParser.json());

createConnection({
  type: 'sqlite',
  database: 'database.sqlite',
  synchronize: true,
  logging: true,
  entities: [Post],
})
  .then((connection) => {
    const postRepository = connection.getRepository('Post');

    app.post('/posts', async (req, res) => {
      const { title, content } = req.body;
      const post = postRepository.create({ title, content });
      await postRepository.save(post);
      res.status(201).json(post);
    });

    app.get('/posts', async (req, res) => {
      const posts = await postRepository.find();
      res.json(posts);
    });

    app.listen(PORT, () => {
      console.log(`Test_cgpt_repo app listening on port ${PORT}`);
    });
})
  .catch((error) => console.log(error));

