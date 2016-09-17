/**
 * Created by Konstantin Kharlambov on 9/14/2016.
 */
var express = require('express');

var app = express();

const stat = '/public';
const views = __dirname + stat + '/views/';

//Declaration of resources
app.use(express.static(__dirname + stat));

app.get('/', function (req, res) {
    res.render(views + "index.jade");
});

app.get('/info', function (req, res) {
    res.render(views + "info.jade");
});

var server = app.listen(8080, 'localhost', function () {
    var host = server.address().address;
    var port = server.address().port;
    console.log("App listening at http://%s:%s", host, port);
});

