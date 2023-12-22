const express = require('express')
const app = express()
const port = 3000;

app.get('/', (req, res) => {
  fetch('https://www.taydaelectronics.com/catalogsearch/result/?q=10+OHM+1%2F4W+1%25+Metal+Film')
  .then(function (response) {return response.text();})
  .then(function (html) {res.send(html.split("SKU")[1].substring(2).split("|")[0]);})
  //res.send('Welcome to my server!');
});
  

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});