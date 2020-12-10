const mysql = require("mysql");

//mysql://dbutx6nlscel4wwo:q8pq7q5lbrz1ojel@hngomrlb3vfq3jcr.cbetxkdyhwsb.us-east-1.rds.amazonaws.com:3306/y3brg0tnot8o97a3// 

let connection;

if (process.env.JAWSDB_URL){
 connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {

    connection = mysql.createConnection({
        host: "localhost",
        port: 3306,
        user: "root",
        password: "",
        database: "animals_db"
    
    });

    connection.connect(function(err){
        if (err) throw err;
        console.log("connected");
    })
}

