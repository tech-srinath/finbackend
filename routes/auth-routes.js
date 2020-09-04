const express = require('express')
const router = express.Router()
const auth = require('../controllers/c-auth')

/** Routes start here */
router.post('/login',auth.verifyUser)

router.post('/register',auth.registerUser)

/** Routes exported */
module.exports = router;