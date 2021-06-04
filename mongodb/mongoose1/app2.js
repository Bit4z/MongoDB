const mongoclient=require('mongodb').MongoClient
url="mongodb://localhost:27017/mydb"
mongoclient.connect(url,function(err,db1){
	if(err)throw err;
	console.log("database is created...")
	var dbo=db1.db("mydb")
	dbo.collection("customers").find({}).toArray(function(err,res){
		if(err)throw err;
		console.log("All the record of the table...",res)
	})
	//db.close()

})