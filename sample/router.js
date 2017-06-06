
var sample_bl = require('./samplebl');
var router = require('express').Router();

router.get('/getexample',sample_bl.getexample);
router.post('/insertexample',sample_bl.postexample);

module.exports = router
