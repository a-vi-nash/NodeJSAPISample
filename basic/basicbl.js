/**
 * Created by Nashi on 6/6/2017.
 */


//method to get the data from the request and pass to db method-GET
function getexample(req, res) {
    var firstname = req.params.firstname || req.query.firstname == undefined ? null : req.params.firstname || req.query.firstname;
    var lastname = req.params.lastname || req.query.lastname == undefined ? null : req.params.lastname || req.query.lastname;


   res.json({"Message":"Hello "+firstname+" "+lastname+"!!!"});

}

//method to get the data from the request and pass to db method-POST
function postexample(req, res) {
    var data1 = req.body.data1 == undefined ? null :req.body.data1;
    var data2 = req.body.data2 == undefined ? null :req.body.data2;

    res.json({"Message":data1+"-"+data2+" Posted!!!"});
}

module.exports = {
    getexample: getexample,
    postexample: postexample
}