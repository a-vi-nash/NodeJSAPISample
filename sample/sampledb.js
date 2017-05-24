
var conn = require("../connection.js"); //db
var mysql   = require("mysql"); //db

function getexample(data1,data2, callback) {

    var op = {
        "Message": "",
        "Reason":""
    };

    var query = "select * from tabename where field1 = ? and field2 = ?";
    var table = [data1,data2];
    query = mysql.format(query, table);

    try {
        conn.getConnection(function (err, connection) {
            //do queries that you need
            if (err) {
                op.Message = "FAILURE";
                op.Reason = "Error while connecting to DB:" + err;
                callback(err, op);
            }
            else {
                connection.query(query, function (err, rows) {
                    try {
                        if (err) {
                            op.Message = "FAILURE";
                            op.Reason = "Error executing MySQL query";
                            callback(err, op);
                        } else {
                            op.Message == "SUCCESS";
                            op.data = rows;
                            callback(err, op);
                        }
                    }
                    catch (err) {
                        op.Message = "FAILURE";
                        op.Reason = err.stack.split("\n")[0];
                        callback(err.stack.split("\n")[0], op);
                    }
                });
                connection.release();
            }
        });
    }
    catch (err) {
        op.Message = "FAILURE";
        op.Reason = err.stack.split("\n")[0];
        callback(err.stack.split("\n")[0], op);
    }

}


function postexample(data1,data2, callback) {

    var op = {
        "Message": "",
        "Reason":""
    };

    var query = "insert into TableName(field1,field2) values(?,?)";
    var table = [data1,data2];
    query = mysql.format(query, table);

    try {
        conn.getConnection(function (err, connection) {
            //do queries that you need
            if (err) {
                op.Message = "FAILURE";
                op.Reason = "Error while connecting to DB:" + err;
                callback(err, op);
            }
            else {
                connection.query(query, function (err, rows) {
                    try {
                        if (err) {
                            op.Message = "FAILURE";
                            op.Reason = "Error executing MySQL query";
                            callback(err, op);
                        } else {
                            op.Message == "SUCCESS";
                            callback(err, op);
                        }
                    }
                    catch (err) {
                        op.Message = "FAILURE";
                        op.Reason = err.stack.split("\n")[0];
                        callback(err.stack.split("\n")[0], op);
                    }
                });
                connection.release();
            }
        });
    }
    catch (err) {
        op.Message = "FAILURE";
        op.Reason = err.stack.split("\n")[0];
        callback(err.stack.split("\n")[0], op);
    }

}

module.exports = {
    getexample: getexample,
    postexample: postexample
}
