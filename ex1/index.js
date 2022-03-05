const express = require('express')
const app = express()
const fs = require('fs')

app.get('/', function (req, res) {

    fs.readFile('./bookstore.html', 'utf8' , (err, html) => {
      if (err) {
        res.status(500).send(err);
        return
      }
      res.send(html);
    })
})
app.get('/detail', function (req, res) {

    fs.readFile('./detail.html', 'utf8' , (err, html) => {
      if (err) {
        res.status(500).send(err);
        return
      }
      res.send(html);
    })
})
app.listen(3000, () => {
    console.log("Your app running on http://localhost:3000");
})