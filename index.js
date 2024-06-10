const http = require('http');

const app = http.createServer((req, res) => {
  res.end('Hello, World!');
});

const PORT = process.env.PORT || 8000;

app.listen(PORT, () => {
  console.log(`Test_cgpt_repo app listening on port ${PORT}`);
});