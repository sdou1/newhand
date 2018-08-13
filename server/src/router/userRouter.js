const express = require('express')
const router = express.Router()
const userControllerPolicy = require('../controllerpolicy/AuthenticationControllerPolicy')
const userController = require('../controllers/AuthenticationController')
router.post('/register', userControllerPolicy.register, userController.register)
router.get('/checklogin', userController.checkLogin)
router.post('/login', userController.login)

module.exports = router