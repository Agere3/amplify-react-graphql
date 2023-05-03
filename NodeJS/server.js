const express= require('express');
const bodyParser=require('body-parser');
const cors=require('cors');

const app=express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());

var mysql = require('mysql');
 
// create a connection variable with the required details
var con = mysql.createConnection({
  host: "rds-mysql-tutorial.c6opqrtwa2uc.eu-west-3.rds.amazonaws.com", // ip address of server running mysql
  user: "masterUsername", // user name to your mysql database
  password: "masterUsername", // corresponding password
  database: "bank" // use the specified database
});
 
// make to connection to the database.
con.connect(function(err) {
  if (err) throw err;
  // if connection is successful
 console.log('connection successful');
});



app.get('/',(req,res)=>{
  res.json('OK');
})

app.post('/',(req,res)=>{
	var {nombre,pwd} =req.body;
	var records = [[req.body.nombre,req.body.pwd]];
	if(records[0][0]!=null)
	{
		con.query("INSERT into clients (nombre,pwd) VALUES ?",[records],function(err,res,fields){

			if(err) throw err;

			console.log(res);
		});
	}
	res.json('Form recieved');


})

app.listen(3002,()=>{
  console.log("Port 3002");
})