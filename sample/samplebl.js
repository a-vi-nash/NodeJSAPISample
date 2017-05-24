
var sample_db = require("./sampledb");

//method to get the data from the request and pass to db method-GET
function getexample(req, res) {
    var data1 = req.params.data1 || req.query.data1 == undefined ? null : req.params.data1 || req.query.data1;
    var data2 = req.params.data2 || req.query.data2 == undefined ? null : req.params.data2 || req.query.data2;


    sample_db.getexample(data1,data2, function (err,data) {
        res.json(data)
    });
}

//method to get the data from the request and pass to db method-POST
function postexample(req, res) {
    var data1 = req.body.data1 == undefined ? null :req.body.data1;
    var data2 = req.body.data2 == undefined ? null :req.body.data2;

    sample_db.postexample(data1,data2, function (err,data) {
        res.json(data)
    });
}

module.exports = {
    getexample: getexample,
    postexample: postexample
}