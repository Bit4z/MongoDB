var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/Shofia";

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  console.log("Database created!");
  var dbo=db.db("mydb");
//  dbo.createCollection("customers",(err,data)=>{if(err)throw err;
  	//console.log("collection is created")})
  dbo.collection("customers").insertMany([{name:"Shivang Gupta", Designation:"Programmer Analyst", Skills:"Logical", Age:21, Contact:"shivang.gupta1234@gmail.com"},{name:"Farman Khan", Designation:"Software Engineer", Skills:"Leadership", Age:22, Contact:"farma.khan1709@gmail.com"},
  	{name:"Sharad Yadav", Designation:"Business Associate", Skills:"Management", Age:20, Contact:"sharad.yadav234@gla.ac.in"}],(err,res)=>{
  	if(err)throw err;
  	console.log("Document is created");

  })

//dbo.close();
  db.close();
});
