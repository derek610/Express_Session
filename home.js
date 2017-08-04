var express = require('express');
//var app = express();
var router = express.Router();
var session = require('express-session');
var cookieParser = require('cookie-parser');


//router.use(cookieParser("asdAADVuh@!%$%$#dsadhack(*&^jj"));
//router.use(session({
//	secret:"asdAADVuh@!%$%$#dsadhack(*&^jj"
//}));

router.get('/', function (req, res, next) {
	console.log(req.session);
	req.session.fromIm = true;
	console.log(req.session);
	req.session.save(function(err){
		res.redirect("help");
		//next("/help");
	});
});
module.exports = router;