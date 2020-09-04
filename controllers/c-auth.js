const con = require('../database/connector');
const register = require('../models/m-register');
const login = require('../models/m-login');


module.exports.verifyUser = async (req, res, next) => {
    try {
        const username = await login.fetchUser(req.body.username)
        status = 'new'

        if(username[0].length !== 0){
            status = 'exists'
        }
        res.status(200).json(status);
    } catch (e) {
        res.status(500).send('User not found!');
    }
    // con.end()
    next()
}

module.exports.registerUser = async (req, res, next) => {
    
    try {
        // let userData = req.body;
        const regStatus = await register.registerUser(req.body.usercode, req.body.username, req.body._password, req.body.branchId);
        res.status(200).json(regStatus[0]);
        console.log(req.body)

    } catch(e) {
        res.status(500).send(e);
        console.log("failed")
    }
    // con.end()
    next
}