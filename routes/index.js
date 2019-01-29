const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

router.use(bodyParser.urlencoded({ extended: false}));
router.use(bodyParser.json());

const ArticlesSchema = new mongoose.Schema({
    title: String,
    body: String,
}, { timestamps: true });

let Articles = mongoose.model('Articles', ArticlesSchema);

// DB stuff
mongoose.connect("mongodb://localhost:27017/blogdb", { useNewUrlParser: true } );
mongoose.set('debug', true);

router.get('/',(req,res)=>{
    Articles.find({},(err,articles)=>{
        res.render('index', { page:'Home', menuId:'home', articles: articles });
    });
});

router.post('/addpost', (req,res)=>{
    let postData = new Articles(req.body);
    postData.save().then((result)=>{
        res.redirect('/');
    }).catch((err)=>{
        res.status(400).send("Unable to save le data");
    })
})

module.exports = router;