var express = require('express');
var app = express();
var Twitter = require('twitter');
var client = new Twitter({
    consumer_key: 'iyddfRPSfExEXQo5kkeWD5wyE',
    consumer_secret: 'xKD4M8v4JkDjJhGoxmoCBzsIEtxgOBXv9X4sxrFI1VuZedxxOu',
    access_token_key: '545491923-WS0cwMPvuub8zDIqszZZPecI5DP63bVBHD2I9DFw',
    access_token_secret: 'AZSSk35qnGNEyrsYQ79od5ZZmA744AnPuOMymT63N6cL6'
});
//console.log( client );

app.use(express.static('public'));

app.get('/', function(req, res){
    var term = req.query.term;
    var params = {screen_name: term};
    //console.log( params );
    client.get('statuses/user_timeline', params, function(error, tweets, response) {
        if (!error) {
            //console.log(tweets);
            var output = "";
            for (var t = 0; t < tweets.length; t++) {
            output += "<div>";
            output += "<h2>" + tweets[t].user.screen_name + "<h2>";
            output += "<p>" + tweets[t].text + "</p>"
            output += "</div>";
            }
            res.send(output);
        }
    });
    
});

app.listen(8080);