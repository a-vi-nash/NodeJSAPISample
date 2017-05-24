
var mysql = require("mysql");
var pool = mysql.createPool(
    {
        connectionLimit: 100,
        host: '127.0.0.1',
        user: 'root',
        password: '1234',
        database: 'helloworld',
        multipleStatements: true,
        debug: false
    }
);

getConnection = function (callback) {
    pool.getConnection(function (err, conn) {
        if (err) {
            return callback(err);
        }
        callback(err, conn);
    });
};

function connectMysql() {
    var self = this;
    var conn = '';
    var pool = mysql.createPool({
        connectionLimit: 100,
        host: '127.0.0.1',
        user: 'root',
        password: '1234',
        database: 'helloworld',
        debug: false
    });
    pool.getConnection(function (err, connection) {
        if (err) {
            self.stop(err);

        } else {
            conn = connection;
        }
    });
    return conn;
}

stop = function (err) {
    console.log("ISSUE WITH MYSQL \n" + err);
    process.exit(1);
}

module.exports = {
    connectMysql: connectMysql,
    getConnection: getConnection
}