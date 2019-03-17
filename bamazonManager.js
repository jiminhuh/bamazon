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
    //fullQuery();
    CheckItem();
})

function CheckItem () {
    inquirer.prompt([
        {
            name: "forsale",
            type: "list",
            message: "View Products for Sale"
        },
        {
            name: "lowinventory",
            type: "list",
            message: "View Low Inventory"
        },
        {
            name: "addinventory",
            type: "list",
            message: "Add to Inventory"
        },
        {
            name: "newproduct",
            type: "list",
            message: "Add New Product"
        }
    ]).then(function(res) {
        
    })
}