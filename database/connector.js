const mysql = require('mysql2');

var connection = mysql.createPool({
    host: process.env.HOST,
    user: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    multipleStatements: true
});

connection.getConnection((err) => {
    if (err) {
        console.log(JSON.stringify(err));
    } else {
        console.log('Connection success!');
    }
})

module.exports = connection.promise();