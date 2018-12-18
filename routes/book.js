var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Book = require('../models/Book');

router.get('/', function(req,res,next){
    Book.find(function(err,data){
        if(err) {
            return next();
        }
        res.json(data);
    })
})

router.post('/', function(req,res,next){
    Book.create(req.body, function(err,data) {
        if(err) {
            return next();
        }
        res.json(data);
    })
})

module.exports = router;