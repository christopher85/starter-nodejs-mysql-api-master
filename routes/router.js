const express = require('express')
,     router = express.Router()
,     indexRoute = require('./indexRoute')
,     authRoute = require('./authRoute')

router.get('/', indexRoute)
router.get('/api/auth', authRoute)


// 404
router.get('*', function(req, res, next){
  res.status(404);
  res.json({message: 'Page introuvable'});
});
module.exports = router;