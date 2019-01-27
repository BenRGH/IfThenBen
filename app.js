var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var lessMiddleware = require('less-middleware');
var logger = require('morgan');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(lessMiddleware(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'public')));

// GNU
app.use(function (req, res, next) {
    res.set('X-Clacks-Overhead', 'GNU Terry Pratchett');
    next();
});

// catch 404 and forward to error handler
//app.use(function(req, res, next) {
    //next(createError(404));
//});

// error handler
app.use(function(err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};

    // render the error page
    res.status(err.status || 500);
    res.render('error');
});

// DB stuff
mongoose.connect("mongodb://localhost:27017/blogdb", { useNewUrlParser: true });

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true}));

var postSchema = new mongoose.Schema({ body: String });
var Post = mongoose.model('Post', postSchema);

/* GET home page. */
app.get('/', function(req, res) {
    Post.find({}, function(err, posts) {
        res.render('index', { title: 'Bloog', posts: posts });
    });
});

app.post('/addpost', function(req, res) {
    var postData = new Post(req.body);
    postData.save().then(function(result){
        res.redirect('/');
    }).catch(function(err){
        res.status(400).send("Unable to save le data");
    });
});

module.exports = app;
