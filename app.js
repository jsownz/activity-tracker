var express = require('express'),
    fs      = require('fs'),
    //redis   = require('redis'),
    //client  = redis.createClient(),
    app     = express();

var hbs     = require('hbs');

app.set('view engine', 'html');
app.engine('html', hbs.__express);

app.use(express.bodyParser());
app.use(express.static('assets'));

//client.on("error", function(err){
//  console.log("Error: "+err);
//});

app.get('/',function(req, res){
//  client.get("username", function(err, reply){
//    if ( err || reply === null ) {
//      res.render('welcome', {
//        title:"Welcome",
//        icon:"user",
//        javascripts:['welcome.js']
//      });
//    } else {
//      res.render('hello', {
//        title: "Hello!", 
//        icon: "user",
//        username: reply.toString()
//      });
//    }
//  });
    res.render('welcome', {
      title: "Welcome",
      icon: "user",
      javascripts:['welcome.js']
    });
});
app.get('/about',function(req, res){
  res.render('about', {title:"About"});
//  client.del("username");
});

app.post('/user', function(req, res){
  //set username
  //client.set("username", req.body.username);
//  var user = { username: req.body.username, password: req.body.password };
//  
//  client.hmset('users.'+req.body.username, user);
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('success');
});

app.get('/users/', function(req, res){
//  client.hkeys('users', function(err, replies) {
//    console.log(replies);
//  });
});

var port = process.env.PORT || 5000;

app.listen(port, function(){
	console.log('Listening...');
});