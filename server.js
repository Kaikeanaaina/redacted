var express = require('express');
var bodyParser = require('body-parser');
var app = express();


//middleware

app.use(express.static('public'));
app.use(bodyParser.urlencoded({extended: true}));



//do stuff

app.post('/message', function( request, response){
  if(request.body.message !== undefined){

    var message = request.body.message;
    var smallMessage = message.toLowerCase();
    var newMessage = smallMessage.replace('selfie', 'self-portrait')
                            .replace('yummers','delicious')
                            .replace('outchea', 'are out here')
                            .replace('bruh','wow')
                            .replace('doge','pug')
                            .replace('cilantro', 'soap')
                            .replace('bae', 'loved one')
                            .replace('swag', 'style')
                            .replace('yolo', 'carpe diem');

    console.log(newMessage);






    response.json(newMessage);
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







// splitMessage[i] !== '.' ||
//          splitMessage[i] !== '#' ||
//          splitMessage[i] !== '!' ||
//          splitMessage[i] !== '?' ||
//          splitMessage[i] !== '@' ||
//          splitMessage[i] !== '$' ||
//          splitMessage[i] !== '^' ||
//          splitMessage[i] !== '&' ||
//          splitMessage[i] !== '*' ||
//          splitMessage[i] !== '(' ||
//          splitMessage[i] !== ')' ||
//          splitMessage[i] !== ',' ||
//          splitMessage[i] !== '-' ||
//          splitMessage[i] !== '_' ||
//          splitMessage[i] !== '=' ||
//          splitMessage[i] !== '+' ||
//          splitMessage[i] !== '{' ||
//          splitMessage[i] !== '}' ||
//          splitMessage[i] !== '[' ||
//          splitMessage[i] !== ']' ||
//          splitMessage[i] !== '|' ||
//          splitMessage[i] !== ':' ||
//          splitMessage[i] !== '#' ||