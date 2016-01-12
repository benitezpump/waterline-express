var express = require('express');
var router = express.Router();

router.get('/user', function(req, res, next) {
   router.models.user.find().then(function(err, model) {
       return res.json(model);
   }).catch(function(err){
       return res.json({ err: err }, 500);
   });
});

router.post('/user', function(req, res, next) {
   router.models.user.create(req.body).then(function(model) {
    res.json({menssage:'user created successful'});
  }).catch(function(err){
       return res.json({ err: err }, 500);
   });
});

module.exports = router;