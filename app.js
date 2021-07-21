const express = require('express');
const mysql = require('mysql');
const app = express();

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'tracnghiem'
});

connection.connect(function(err){
  (err) ? console.log(err) : console.log(connection);
});

app.get('/api/news', (req, res) => {
  res.json({ message: 'I am a message from Server!'});
});

app.listen(4200, () => console.log('App listening on port 4200'));