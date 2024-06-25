var express = require('express');
var app = express();
var pg = require('pg');
var connectionString = process.env.DATABASE_URL || 'postgres://localhost:5432/balaDemo';
var bodyParser = require("body-parser");

if (process.env.DATABASE_URL !== undefined) {
  pg.defaults.ssl = true;
}

var client = new pg.Client(connectionString);
client.connect();

var userTable = 'tbl_users';
var schema = 'public.';

app.use(bodyParser.urlencoded({ extended: false }));

const rootDir = require('path').resolve('./');

// setup the demo data if needed
client.query('SELECT * FROM public.tbl_users', function(error, data) {
  if (error !== null) {
    client.query('SELECT * FROM tbl_users', function(error, data) {
      if (error !== null) {
        console.log('Loading Demo Data...');
        require('./db/demo.js')(client);
        console.log('Done Loading Demo Data!');
      }
    });
  }
  else {
    userTable = schema + 'tbl_users';
  }
});

app.get('/users', function(req, res) {
  client.query('SELECT * FROM ' + userTable, function(error, data) {
    res.json(data.rows);
  });
});

app.get('/', function (req, res) {
   // res.send(rootDir);
   res.sendFile(rootDir + '\\index.html');
});

app.post('/submit-student-data', function (req, res) {
    var name = req.body.firstName + ' ' + req.body.lastName;
    
    res.send(name + ' Submitted Successfully!');
});


app.put('/update-data', function (req, res) {
    res.send('PUT Request');
});

app.delete('/delete-data', function (req, res) {
    res.send('DELETE Request');
});

var server = app.listen(5000, function () {
    console.log('Node server is running..');
});