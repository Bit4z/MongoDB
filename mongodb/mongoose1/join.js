const mongoclient=require('mongodb').MongoClient
url="mongodb://localhost/27017"
mongoclient.connect(url,function(err,db){
	if(err)throw err;
	console.log("Connection created succesfully....")
	var dbo=db.db("mydb")
	/*dbo.createCollection("StudentInfo",(err,res)=>{
		if(err)throw err;
		console.log("Collection created successfully....")
		
	})
	*/
	//dbo.collection("StudentInfo").insertMany([{Course:"MCA",Salary:"389000"},{Course:"BCA",Salary:"279000"},{Course:"MTech",Salary:"389000"}])
	dbo.collection('sofia').aggregate([{$lookup:{from:'StudentInfo',localField:'Course', foreignField: 'Course',as:'Course'}}]).toArray(function(err, res) {
    if (err) throw err;
    console.log(JSON.stringify(res));
    db.close();
  });
})