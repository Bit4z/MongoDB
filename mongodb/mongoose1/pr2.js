const mongoclient=require('mongodb').MongoClient
url="mongodb://localhost/27017"
mongoclient.connect(url,function(err,db){
	if(err)throw err;
	console.log("connection created is successfully....")
	dbo=db.db("Aman1")

	/*
	var query={name:1}
	dbo.collection("student").find().sort(query).toArray((err,res)=>{
		if(err)throw err;
		console.log(res)

	})

	//decending order
	var query={password:-1}
	dbo.collection("student").find().sort(query).toArray((err,res)=>{
		if(err)throw err;
		console.log(res)

	})
	*/
	/*
	dbo.collection("student").deleteMany({name:"Ziyaulhaq Khan"},(err,obj)=>{
		if(err)throw err;
		console.log(obj)
	})
*/


dbo.collection("student").find({}).toArray((err,res)=>{
	if(err)throw err;
	console.log(res)
})


/*dbo.collection("student").drop((err,delOk)=>{
	if(err)throw err;
	console.log("Delete collection successfully...")
})
*/

})
