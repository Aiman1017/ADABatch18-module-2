var express = require('express');
var app = express();
var bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({extended: true}))

app.use(bodyParser.json());

var port = process.env.PORT || 8080;

var router = express.Router();

router.get('/', function(req, res){
	res.json({message: 'Hooray! Welcome to my API'})
})

router.get('/hello', function(req, res){
	res.json({message: 'Hello World'})
})

router.get('/goodbye/:name', function (req, res){
	res.json({message: 'goodbye ' + req.params.name})
})

//Asking the answer from body is 'POST'
router.post('/sum', (req, res) => {
	var answer = req.body.num1 + req.body.num2
	res.json({message: 'The sum is ' + answer})
})

app.use('/api', router);

app.listen(port);

console.log('Magic happens on part ' + port);