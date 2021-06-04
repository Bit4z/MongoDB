const mongoclient=require('mongodb').MongoClient
url="mongodb://localhost:27017/Aman"
mongoclient.connect(url,function(err,db){
	if(err)throw err;
	console.log("connection successfully....")
	var dbo=db.db("Aman1")
	//dbo.createCollection("student",function(err,res){
		//if(err)throw err;
		//console.log("collection created successfully.....")
		//dbo.collection("student").insertMany([{name:"Aman Gupta",password:"Gupta@aman",gmail:"20MCA1107@cuchd.in"},{name:"Shivang Gupta",password:"Gupta@shivang",gmail:"20MCA13042@cuchd.in"},{name:"Updesh Yadav",password:"Yadav@updesh",gmail:"20MCA1300@cuchd.in"},
			//{name:"Ziyaulhaq Khan",password:"Khan@Ziyaulhaq",gmail:"20MCA1107"}])
		/*dbo.collection("student").find({},{projection:{name:1, password:1,_id:0}}).toArray(function(err,res){
			if(err)throw err;
			console.log("the result is<br>",res)
		})

		dbo.collection("student").find({},{projection:{name:1, password:1,_id:0}}).toArray(function(err,res){
			if(err)throw err;
			console.log("the result is<br>",res)
		})



	//})
	*/

	/*
	dbo.collection("student").find({},{projection:{name:"ziyaulhaq"}}).toArray(function(err,res){
		if(err)throw err;
		console.log(res)
	})
	*/
	dbo.collection("student").find({}).toArray((err,res)=>{
		if(err)throw err
			console.log(res);
	})
	console.log("result fetch with regular expression")
	var query={gmail:/^20MCA/}
	dbo.collection("student").find(query).toArray((err,res)=>{
		if(err)throw err;
		console.log(res)
	})
})

