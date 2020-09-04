const con = require('../database/connector')

module.exports = class register {

    constructor() { }

    static registerUser(usercode, username, _password, branchId) {
        console.log("call oka")
        // sql = 'INSERT INTO bkusers (urcode, urname, pasw, branchid) VALUES (?,?,?,?) ';
        return con.execute('INSERT INTO bkusers (urcode, urname, pasw, branchid) VALUES (?,?,?,?) ', [usercode, username, _password, branchId])
    }
}
