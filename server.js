var express = require('express');
var bodyParser = require('body-parser');
var app = express();


//middleware

app.use(express.static('public'));
app.use(bodyParser.urlencoded({extended: true}));



//do stuff

app.post('/message', function( request, response){
  if(request.body.message !== undefined){
    console.log(request.body);
    var message = request.body.message;
    var splitMessage = message.split(' ');
    console.log(splitMessage);






    response.json({'success': true});
    response.end();

  } else{
    response.json({'success': false});
    response.end();
  }

});



var server = app.listen(3000, function(){
  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening at http://%s:%s', host ,port);
});