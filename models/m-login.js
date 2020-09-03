const con = require('../database/connector')

module.exports = class login{
    static fetchAll(){
        return con.execute('SELECT urid, urcode from bkusers');
    }
}