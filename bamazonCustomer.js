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
    buyItem();
})

// function fullQuery () {
//     connection.query('Select * from products', function(err, data) {
//         if(err) throw err;
//         console.log(data);
//     })
// }

function buyItem () {
    inquirer.prompt(
        [{
            name: "id",
            type: "input",
            message: "What ID # is the item you want to purchase?"
        },
        {
            name: "quantity",
            type: "input",
            message: "How many do you want to purchase?"
        }]
        ).then(function(response) {
            connection.query("SELECT stock_quantity FROM products WHERE item_id = ?", [response.id], function (err,data) {
                if(err) throw err;
                if(data[0].stock_quantity >= response.quantity) {
                    var newQuantity = parseInt(data[0].stock_quantity) - parseInt(response.quantity);
                    connection.query("UPDATE products SET stock_quantity = ? WHERE item_id = ?", [newQuantity,response.id], function(err,data) {
                        if(err) throw err;
                        console.log("Purchase Complete! Thank you.");
                    });
                } else {
                    console.log("Insufficient Quantity!");
                }
                connection.end(function(err) {
                    if(err) throw err;
                })
            })
        })
}


