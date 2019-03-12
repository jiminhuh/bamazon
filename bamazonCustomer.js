const mysql = require("mysql");
const inquirer = require("inquirer");

const connection = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    user: "root",
    password: "password123",
    database: "bamazon"
})

connection.connect(function(err) {
    if(err) throw err;
    fullQuery();
    connection.end(function(err) {
        if(err) throw err;
    })
})

function fullQuery () {
    connection.query('Select * from products', function(err, data) {
        if(err) throw err;
        console.log(
            data
        )
    })
}