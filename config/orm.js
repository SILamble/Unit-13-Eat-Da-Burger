// Import MySQL connection.
const connection = require("../config/connection.js");

// Object for all our SQL statement functions.
const orm = {
  //table name will be passed into function ("tableInput" argument) via the burger.js file
  all: function (tableInput, cb) {
    const queryString = "SELECT * FROM " + tableInput + ";";
    connection.query(queryString, function (err, result) {
      if (err) {
        throw err;
      }
      cb(result);
    });
  },
  //Arguments passed to function complete query string "INSERT INTO (name) VALUES ("new burger name")
  create: function (table, name, nameText, cb) {
    //use "let" as variable is not a constant
    let queryString = "INSERT INTO " + table;

    queryString += " (";
    queryString += name;
    queryString += ") ";
    queryString += "VALUES (";
    queryString += JSON.stringify(nameText.name);
    queryString += ") ";

    console.log(queryString);

    connection.query(queryString, function (err, result) {
      if (err) {
        throw err;
      }

      cb(result);
    });
  },
  // Example SQL Syntax required to update // UPDATE burgers SET devoured = true WHERE id = 7
  update: function (table, updateVal, val, condition, cb) {
    //use "let" as variable is not a constant
    let queryString = "UPDATE " + table;

    queryString += " SET ";
    queryString += updateVal;
    queryString += " = ";
    queryString += val
    queryString += " WHERE ";
    queryString += condition;

    console.log(queryString);
    connection.query(queryString, function (err, result) {
      if (err) {
        throw err;
      }

      cb(result);
    });
  },

};


module.exports = orm;
