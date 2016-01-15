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
    var newMessage = smallMessage.replace(/selfie'/g, 'self-portrait')
                            .replace(/yummers/g,'delicious')
                            .replace(/outchea/g, 'are out here')
                            .replace(/bruh/g,'wow')
                            .replace(/doge/g,'pug')
                            .replace(/cilantro/g, 'soap')
                            .replace(/bae/g, 'loved one')
                            .replace(/swag/g, 'style')
                            .replace(/yolo/g, 'carpe diem');

    var splitMessage = newMessage.split('');
    var array = [];


    for(var i = 0 ; i < splitMessage.length ; i++){
      if( i === 0){
        array.push(splitMessage[0].toUpperCase());
      } else {
        array.push(splitMessage[i]);
      }
    }

    var joinedArray = array.join("");
    console.log(joinedArray);


    response.json(joinedArray);
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