var express = require('express');
var router = express.Router();


/* GET users listing. */
router.post('/sign', function(req, res, next) {
	res.setHeader("Access-Control-Allow-Origin","*");
	const MongoClient = require('mongodb').MongoClient;
	const assert = require('assert');
	 
	// Connection URL
	const url = 'mongodb://localhost:27017';
	 
	// Database Name
	const dbName = 'tiancai';
	 
	// Use connect method to connect to the server
	MongoClient.connect(url, function(err, client) {
	  assert.equal(null, err);
	  console.log("Connected successfully to server");
	 
	  const db = client.db(dbName);
	  const collection = db.collection('users');
  // Find some documents
	  collection.find({phone:req.body.phone,password:req.body.password}).toArray(function(err, docs) {
	    assert.equal(err, null);
	    console.log("Found the following records");
	    console.log(docs)
	    // callback(docs);
	    if(docs.length>0){
	    	res.send("true")
	    }else{
	    	res.send("false")
	    }
	    
	  });
	 
	  client.close();
	});
});

module.exports = router;
