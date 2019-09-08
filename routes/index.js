// Full Documentation - https://www.turbo360.co/docs
const turbo = require('turbo360')({site_id: process.env.TURBO_APP_ID})
const vertex = require('vertex360')({site_id: process.env.TURBO_APP_ID})
const router = vertex.router()



var Data=require('../models/data')

var cars = ["success","primary","danger","dark"];
/*  This is the home route. It renders the index.mustache page from the views directory.
	Data is rendered using the Mustache templating engine. For more
	information, view here: https://mustache.github.io/#demo */


router.get('/', (req, res) => {
	Data.find(function(err,docs){
		res.render('index',{datas:docs,xx:cars[Math.floor(Math.random() * (4))]});
	});
});


router.get('/query', (req, res) => {
	//search , asc, ctc, base , co, off, time
		console.log(req.query);
		if(req.query['search']=== undefined &&req.query['asc']=== undefined &&
	req.query['ctc']=== undefined &&req.query['base']=== undefined &&req.query['co']=== undefined &&
req.query['off']=== undefined &&req.query['time']=== undefined )
		{
			res.render('query',null);
		}
			else if(req.query['search']!== '' )
			{
				var x=req.query['search'];

				console.log(x);
				console.log("search");
				Data.find({company_name:{$regex: x,$options:'i'}},function(err,docs){
					res.render('result',{datas:docs,xx:cars[Math.floor(Math.random() * (4))]});
				});
			}
			else if(req.query['ctc']!== '' )
			{
				var x=req.query['search'];

				console.log(x);
				console.log("ctc");
				if(req.query['asc']== 'Descending' ){
				Data.find({company_name:{$regex: x,$options:'i'}},function(err,docs){
					res.render('result',{datas:docs,xx:cars[Math.floor(Math.random() * (4))]});
				}).sort({ctc:-1});
				}
				else{
				Data.find({company_name:{$regex: x,$options:'i'}},function(err,docs){
					res.render('result',{datas:docs,xx:cars[Math.floor(Math.random() * (4))]});
				}).sort({ctc:1});
				}
			}
			else if(req.query['base']!== '' )
			{
				var x=req.query['search'];

				console.log(x);
				console.log("base");
				if(req.query['asc']== 'Descending' ){
				Data.find({company_name:{$regex: x,$options:'i'}},function(err,docs){
					res.render('result',{datas:docs,xx:cars[Math.floor(Math.random() * (4))]});
				}).sort({base:-1});
				}
				else{
				Data.find({company_name:{$regex: x,$options:'i'}},function(err,docs){
					res.render('result',{datas:docs,xx:cars[Math.floor(Math.random() * (4))]});
				}).sort({base:1});
				}
			}
			else if(req.query['co']!== '' )
			{
				var x=req.query['search'];

				console.log(x);
				console.log("co");
				if(req.query['asc']== 'Descending' ){
				Data.find({company_name:{$regex: x,$options:'i'}},function(err,docs){
					res.render('result',{datas:docs,xx:cars[Math.floor(Math.random() * (4))]});
				}).sort({cgpa_cutoff:-1});
				}
				else{
				Data.find({company_name:{$regex: x,$options:'i'}},function(err,docs){
					res.render('result',{datas:docs,xx:cars[Math.floor(Math.random() * (4))]});
				}).sort({cgpa_cutoff:1});
				}
			}
			else if(req.query['off']!== '' )
			{
				var x=req.query['search'];

				console.log(x);
				console.log("off");
				if(req.query['asc']== 'Descending' ){
				Data.find({company_name:{$regex: x,$options:'i'}},function(err,docs){
					res.render('result',{datas:docs,xx:cars[Math.floor(Math.random() * (4))]});
				}).sort({total_offers:-1});
				}
				else{
				Data.find({company_name:{$regex: x,$options:'i'}},function(err,docs){
					res.render('result',{datas:docs,xx:cars[Math.floor(Math.random() * (4))]});
				}).sort({total_offers:1});
				}
			}
			else{
			res.render('query',null);
			}

});

router.get('/result', (req, res) => {

		res.render('result',null);

});
router.get('/comingsoon', (req, res) => {

		res.render('cs',null);

});







module.exports = router
