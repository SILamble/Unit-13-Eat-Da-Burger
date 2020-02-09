const mysql = require("mysql");


//connection to sql - INSERT YOUR OWN PASSWORD HERE
const connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "twubc01sql",
    database: "burgers_db"
});

connection.connect(function (err) {
    if (err) {
        console.error("error connecting: " + err.stack);
        return;
    }
    console.log("connected as id " + connection.threadId);
});

module.exports = connection;