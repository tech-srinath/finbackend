const con = require('../database/connector')

module.exports = class login {
    constructor(username, password) {
        this.username = username;
        this.password = password;
    }
    static fetchUser(username) {
        return con.execute('SELECT urname from bkusers WHERE urname = ?', [username])
    }
}