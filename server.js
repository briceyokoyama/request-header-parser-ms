var express = require('express');
var app = express();

app.get('/', function(req,res) {
    var ip = req.headers['x-forwarded-for'];
    var lang = req.headers['accept-language'];
    var soft = req.headers['user-agent'];
    
    var obj = {
        ipaddress: ip,
        language: lang,
        software: soft
    }
    
    res.send(obj);
});

app.listen(8080, function() {
    console.log('Nothing to see here');
})