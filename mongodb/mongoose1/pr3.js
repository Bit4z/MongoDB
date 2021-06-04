const mongoclient=require('mongodb').MongoClient
url="mongodb://localhost/27017"
mongoclient.connect(url,(err,db)=>{
if(err)throw err;
console.log("connection created successfully...")
dbo=db.db("mydb")
/*dbo.createCollection("sofia",function(err,res){
	if(err)throw err;
	console.log("collection created successfully...")

})
*/
/*	
dbo.collection("sofia").insertMany([{Name:"Shivang",Course:"BCA" ,profile:"Business Manager", adress:"Firozabad(up), chand nagar, 387 "},{Name:"Updesh",Course:"MCA",Profile:"Fresher",adress:"Agra(up),jalesar"}],function(err,res){
	if(err)throw err;
	console.log("Insert record")
})
*/
dbo.collection("sofia").updateOne({Name:"Updesh"},{$set:{Course:"20MCA1300"}},function(err,res){
	if(err)throw err;
	console.log("1 record updated")
	
})

dbo.collection("sofia").find({}).limit(3).toArray(function(err,res){
	if(err)throw err;
	console.log(res)
})

})