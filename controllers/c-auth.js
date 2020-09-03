const login = require('../models/m-login');

module.exports.getAllUser = async (req, res, next) => {
    try{
        const allUsers = await login.fetchAll()
        res.status(200).json(allUsers[0]);
    } catch (e){
        res.status(500).send('api failed');
    }
    next()
}
