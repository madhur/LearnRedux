var express = require('express');
var app = express();

//  app.use(function(request, response, next){

// 	if(request.headers['x-forwarded-proto']=='https')
// 	{
// 		next();
// 	}
// 	else
// 	{
// 		response.redirect('http://' + request.hostname + request.url);
// 	}

// });

app.use(express.static('public'));

const port  = process.env.PORT || 3000;

app.get('/data', function(req, res)
{

	res.send({
		name: 'Madhur',
		age: 30
	});
	res.end();

});

app.listen(port, function () {
  console.log('Example app listening on port ' + port);
});