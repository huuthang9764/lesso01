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

app.get('/api/ds_cau_hoi', (req, res) => {
  var sql = "SELECT * FROM ds_cau_hoi ";
  connection.query(sql, function(err, results) {
    if (err) throw err;
    res.json({ds_cau_hoi: results});
  });
});
app.listen(4200, () => console.log('App listening on port 4200'));