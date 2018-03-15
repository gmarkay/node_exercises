const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send(`<h1> Hello World</h1>`);
});

app.get('/time', (req, res) => {
  res.send(`it is currently ${new Date().toISOString()}`);
})

const port = process.env.PORT || 8080;

app.listen(port, () => {
  console.log(`listening on port ${port}`);
});