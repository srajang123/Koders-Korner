let mysql = require('mysql2');
module.exports = mysql.createPool({ host: '127.0.0.1', user: 'srajan', password: 'Project@123', database: 'k3' }).promise();