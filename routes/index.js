const express = require('express');

const router = express.Router();
const user_Controller = require('../controllers/users_controller');

console.log('router loaded');
router.get('/',user_Controller.signin)
router.get('/singup',user_Controller.signup)
router.use('/',require('./user'));
router.use('/',require('./home'));
router.use('/',require('./about'));
router.use('/',require('./contact'));
router.use('/',require('./course'));
router.use('/forget-password',require('./forgetpassword'))
router.use('/',require('./profile'));

module.exports = router;