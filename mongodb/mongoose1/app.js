const mongoose=require('mongoose');
mongoose.connect("mongodb://localhost:27017/ziya",{useNewUrlParser:true,useUnifiedTopology:true}).then(()=>console.log("connection successfull...")).catch((err)=>console.log(err));

const playlistSchema=new mongoose.Schema({name:{type:String,required:true},

ctype:String,
videos:Number,
author:String,
active:Boolean,
date:{type:Date,
	default:Date.now
}}
	)

const Playlist=new mongoose.model("Playlist",playlistSchema);


const reactPlaylist=new Playlist({

name:"React js",
ctype:"Front End",
videos:80,
author:"Ziyaulhaq",
active:true,
})
reactPlaylist.save();
