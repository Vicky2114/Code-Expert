const express = require('express');
const passport = require('passport');

const router = express.Router();

const home_controller=require('../controllers/home_controller');

router.get('/home',passport.checkAuthentication,home_controller.home);


module.exports = router;