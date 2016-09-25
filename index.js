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

app.get('/user/:id?', function(req, res,next){
    var id = req.params.id;
    if (id) {
        res.send(id);
    } else {
        next();
    }
});

app.get('/index', function (req, res) {
    res.render(views + "index.jade");
});

app.get('/users', function(req, res) {
    res.send("from user")
});
app.get('/about', function (req, res) {
    res.render(views + "about.jade");
});
app.get('/contact', function (req, res) {
    res.render(views + "contact.jade");
});
app.get('/gallery', function (req, res) {
    res.render(views + "gallery.jade");
});
app.get('/services', function (req, res) {
    res.render(views + "services.jade");
});
app.get('/prices', function (req, res) {
    res.render(views + "prices.jade");
});

var server = app.listen(8080, 'localhost', function () {
    var host = server.address().address;
    var port = server.address().port;
    console.log("App listening at http://%s:%s", host, port);
});

