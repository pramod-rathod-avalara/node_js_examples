var mysql      = require('mysql');

var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'admin',
  password : 'admin',
  database : 'angularjs_training'
});

connection.connect(function(err) {
  if (err) {
    console.error('error connecting: ' + err.stack);
    return;
  }

  var query = 'SELECT id, name FROM Employee';
  connection.query(query, function(err, rows, fields) {
    if (err) {
      throw err;
    }
    else {
      var i = 0;
       rows.forEach(function(row) {
        console.log( "i:" + (i++) + " id: " + row.id + " - Name: " + row.name);
      });
    }

    connection.end();
  });
});