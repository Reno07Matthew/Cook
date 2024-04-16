import express  from "express";
import mysql from "mysql";
import cors from "cors";
import { NavLink } from "react-router-dom";

const app = express();

app.use(express.json());
app.use(cors());

const con = mysql.createConnection({
    user: "root",
    host: "localhost",
    password: "renoreji2003",
    database: "cookzilla",
    port: 3306
}); 

app.post('/register', async (req, res) => {
    const username = req.body.username;
    const dob = req.body.dob;
    const email = req.body.email;
    const password = req.body.password;
    console.log(req.body);

    con.query("INSERT INTO new_table (username, dob, email, password) VALUES (?, ?, ?, ?)",[username,dob,email,password],
    (err, result) => {
        if(err){
            console.log(err);
            res.send({result});
        }else{
            res.send({message: "Enter valid details"})
        }
    }
    )
})


app.post('/login', (req, res) => {
    const username = req.body.username;
    const dob = req.body.dob;
    const email = req.body.email;
    const password = req.body.password;
    console.log(req.body);

    con.query("SELECT * FROM new_table WHERE email = ? AND password = ?",[email,password],
    (err, result) => {
    if(err){
    res.setEncoding({err: err});
    }else{
    if(result.length > 0){
                res.send(result);
            }
        }
    }
    )
})
app.listen(3036, () => {
    console.log("oo myr, run aayi");
})
