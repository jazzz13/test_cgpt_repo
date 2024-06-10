const http = require('http');

const app = http.createServer();

const PORT = process.env.PORT || 8000;

app.use((_, _, next) => {
  next() => {
    res.end('Hello, World!');
  };
});

App.listen(_PORT, () => {
  console.log(`Test_cgpt_repo app listening on port ${PORT}`);
});