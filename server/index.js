const express = require("express");
const mysql = require("mysql");
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(cors());

const db = mysql.createConnection({
    user: "root",
    host: "localhost",
    password: "Vinay@123",
    database: "registration",
});



app.post("/register", (req, res) => {


    const username = req.body.username;
    const password = req.body.password;

    db.query("insert into users (username,password) values (?,?)",
        [username, password],
        (err, result) => {
            console.log(err);
        });
});

app.post("/login", (req, res) => {

    const username = req.body.username;
    const password = req.body.password;
    db.query("select * from registration.users where username = ? AND password = ?",
        [username, password],
        (err,result) => {
            if(err)
               res.send({err:result});
            else if(result.length==0){
                res.send({ message : "Wrong Email / Password "});
            }
            else if (result){
                res.send(result);
            }
        });
})


app.listen(3001, () => {
    console.log("server running");
})