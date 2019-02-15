var express = require('express');
var router = express.Router();
const assert = require('assert');
var db = require('./db.js')
/* GET users listing. */
router.post('/recharge', function(req, res, next) {
	res.setHeader("Access-Control-Allow-Origin","*");
	
	    function cha(){
		   		return new Promise((resolve,reject)=>{
		   			db.query((db)=>{
		   				db.collection('sum').find({username:req.body.username}).toArray(function(err, docs) {
						    console.log("Found the following records");
						    console.log(docs);
						    if(docs.length>0){
						    	// console.log(docs.sum);
						    	resolve()
						    }else{
					    		jia()								 
						    }    	
			  			});
		   			})
		   		})
		   };
		function jia(){
			db.query(function(db){
				 db.collection('sum').insertMany([
				    {username : req.body.username,sum:req.body.sum}
				  ], function(err, result) {
				    assert.equal(err, null);
				    assert.equal(1, result.result.n);
				    assert.equal(1, result.ops.length);
				    console.log("Inserted 1 documents into the collection");
				  });
			  	   res.send('充值成功')
			})
		}


		function  gengxin(){
			var sum = sum ;
			return new Promise(function(resolve,reject){
	   			// console.log( req.body.uname,req.body.password)
	   			db.query(function(db){
	   				db.collection('sum').update({
					 	'username': req.body.username,'password':req.body.password
					}, {
						  $set: {
						    'sum': req.body.sum
						  }					
					});
			    		res.send('充值成功')
		   			})
	   		})
		}
		cha().then(gengxin);






});		

module.exports = router;
