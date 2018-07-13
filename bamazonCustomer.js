
//----- npm packages ----//
var mysql = require("mysql");
var inquirer = require("inquirer");
//---- connect to database----//
var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "root",
    database: "bamazon_db"
});
//---connection successfull mssge---//
connection.connect(function (err) {
    if (err) throw err;
    console.log("You are Conected");
    start()
});

//---welcome message---//
function start(){
    console.log(welcome);
    inquirer.prompt([
        {
            name: "start",
            type: "confirm",
            message: "Would you like to see our products?"
        }
    ]).then (function(show){
        if(show.start === true){
            showProducts();
        } else {
            console.log("see you!");
        }
    })
};

//---- display available products---//
var welcome = "**------------------------------------------------**\n" +
"* ------------------ WELCOME TO BAMAZNE-----------*\n" +
    "* -----Checkout all of our available products-----*\n" +
    "* ------------------------------------------------*";
function showProducts() {

    connection.query("SELECT *FROM products", function (err, res) {
        if (err) throw err;
        for (var i = 0; i < res.length; i++) {
            console.log(
                "id: " + res[i].id + "\n" +
                "Product Name: " + res[i].product_name + "\n" +
                "Department: " + res[i].department_name + "\n" +
                "Price: " + res[i].price + "\n" +
                "Stock: " + res[i].stock + "\n" +
                "---------------------------------"
            );
        }

        placeOrder();
    })
};

//------ get users order input-----//
function placeOrder() {
    inquirer
        .prompt([
            {
                name: "productid",
                type: "input",
                message: "Which product would you like to purchase? (enter id)"
            }, {
                name: "quantity",
                type: "input",
                message: "How many would you like to purchase?"
            }

        ])
        .then(function (clientOrder) {
            connection.query("SELECT * FROM products WHERE id = ?", [clientOrder.productid], function (err, selres) {
                //----- updates database----//
               if (clientOrder.quantity <= selres[0].stock) {
                   connection.query("UPDATE products SET stock = ? WHERE id = ?", [selres[0].stock-clientOrder.quantity, selres[0].id], function (err, res) {
                       //------ gives user total----//
                       console.log("-----Thank you for your preference!----\n"+"Your total is "+  selres[0].price * clientOrder.quantity);
                   })
               } else {
                   console.log("Product not available!")
               }

                connection.end();
            });
        });
};



