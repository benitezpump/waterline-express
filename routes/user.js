var express = require('express');
var router = express.Router();

module.exports = function(app){
    router.get('/user', function(req, res, next) {
        app.models.user.find().then(function(model) {
            return res.json(model);
            }).catch(function(err){
                return res.json({ err: err }, 500);
            });
    });

    router.post('/user', function(req, res, next) {
        app.models.user.create(req.body).then(function(model) {
            return res.json({menssage:'user created successful'});
            }).catch(function(err){
                return res.json({ err: err }, 500);
            });
    });
    return router;
};