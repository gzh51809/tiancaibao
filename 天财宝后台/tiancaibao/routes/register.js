var express = require('express');
var router = express.Router();
var db = require('./db.js');
const assert = require('assert');

/* GET users listing. */
router.post('/register', function(req, res, next) {
		res.setHeader("Access-Control-Allow-Origin","*");
  		function cha(){
	   		return new Promise(function(resolve,reject){
	   			db.query(function(db){
	   				db.collection('users').find({phone:req.body.phone,password:req.body.password}).toArray(function(err, docs) {
					    console.log("Found the following records");
					    console.log(docs);
					    if(docs.length>0){
					    	res.send('账号已存在');
					    }else{
					    	resolve();
					    }    	
		  			});
	   			})
	   		})
	   };
	   function zhuce(){
	   		return new Promise(function(resolve,reject){
	   			 db.query(function(db){
	   			 	db.collection('users').insertMany([
					    {
					    	phone : req.body.phone,
					    	password : req.body.password
					    }
					  ], function(err, result) {
					    assert.equal(err, null);
					    assert.equal(1, result.result.n);
					    assert.equal(1, result.ops.length);
					    console.log("Inserted 1 documents into the collection");
					    res.send('注册成功')
					    // callback(result);
					  });	
	   			 })
	   		})
	   }
	   cha().then(zhuce);
});

module.exports = router;
