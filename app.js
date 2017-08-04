var express = require('express');
var app = express();
var router = express.Router();
var appRoot = require('app-root-path');
var session = require('express-session');
var cookieParser = require('cookie-parser');

var help = require('./help');
var home = require('./home');


app.use(cookieParser("asdAADVuh@!%$%$#dsadhack(*&^jj"));
app.use(session({
	secret:"asdAADVuh@!%$%$#dsadhack(*&^jj",
	resave: true,
	saveUninitialized: true
}));
app.use("/home",home);
app.use("/help",help);


app.get('/', function (req, res) {
	/*var sess = req.session;
	if (sess.views){
		sess.views++;
	}
	else{
		sess.views = 1;
	}*/
	//req.session.fromIm = true;
	//console.log(req.session);
	//res.cookie('fromIm', true);
	//delete sess.views;
	
	//res.sendFile(appRoot+"/"+"home.html");
	//res.send(''+sess.views);
	//req.session.save(function(err){
	//	res.redirect("home");
		//next("/help");
	//});
	res.redirect("home");
});

app.listen(3000, function () {
	console.log('Example app listening on port 3000!');
});