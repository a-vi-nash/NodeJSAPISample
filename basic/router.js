/**
 * Created by Nashi on 6/6/2017.
 */
var basic_bl = require('./basicbl');
var router = require('express').Router();

router.get('/getexample',basic_bl.getexample);
router.post('/insertexample',basic_bl.postexample);

module.exports = router