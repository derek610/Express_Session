var express = require('express');
//var app = express();
var router = express.Router();
//var appRoot = require('app-root-path')
var session = require('express-session');
var cookieParser = require('cookie-parser');


//router.use(cookieParser("asdAADVuh@!%$%$#dsadhack(*&^jj"));
//router.use(session({
//	secret:"asdAADVuh@!%$%$#dsadhack(*&^jj"
//}));

router.get('/', function (req, res, next) {
	console.log(req.session);
	
	/*var sess = req.session;
	if (sess.views){
		sess.views++;
	}
	else{
		sess.views = 1;
	}
	res.cookie('fromIm', true);*/
	//delete sess.views;
	
	//res.sendFile(appRoot+"/"+"home.html");
	if (req.session.fromIm == true){
		res.send(''+req.session.fromIm);
	}
	else {
		res.send('false');
	}
});
module.exports = router;