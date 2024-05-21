const express = require('express');
const mysql = require('mysql2');
const bcrypt = require('bcryptjs');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json()); // Parse incoming JSON data

// Configure Cloud SQL connection details
const pool = mysql.createConnection({
//   host: 'my-project1-417010:us-central1:rahul007.cloudsql.gcep.database.googleapis.com', // Replace with your instance connection name
host: 'localhost',  
user: 'root',
  password: 'Rahul@2000',
  database: 'user_details',
});

// pool.then(() => {
//     console.log('Connection to Cloud SQL established successfully!');
//   }).catch((error) => {
//     console.error('Error creating pool:', error);
//   });

const host = pool.config.host;
// const connectionString = `mysql://${pool.config.user}:${pool.config.password}@${host}/${pool.config.database}`;

console.log('Host:', host);
// console.log('Connection String:', connectionString);

// Login endpoint
app.post('/login', async (req, res) => {
  const password = req.body.pass;
  const email = req.body.email;
    pool.query('SELECT * FROM users WHERE email = ? and Password = ?', [email,password],
    (err,result)=>{
        if (err){
            console.log(err);
        }
        else {
            if (result.length >0){
                console.log("logged IN")
                res.send(result)
            }else{
                console.log("invalid")
                res.send(err)
            }
        }
    }
)
    console.log(password,email)
});

// Signup Endpoint
app.post('/signup', async (req, res) =>{
    const sql="INSERT INTO users (`email`,`Password`,`User_Name`) VALUES(?)";
    const values=[
        req.body.email,
        req.body.password,
        req.body.username
    ]
    console.log(values)
    var rt=pool.query(sql,[values],(err,data)=>{
        if(data){
            res.send(data)
        }else{
            res.send({message:err})
        }
    })
    console.log(rt)
});
const port = process.env.PORT || 3001;
app.listen(port, () => {console.log(`Server listening on port ${port}`)});
