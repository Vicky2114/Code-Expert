const express = require('express');
const router = express.Router();
const passport = require('passport');

const userProfile=require('../controllers/profile_controller');

router.get('/profile/:id', passport.checkAuthentication, userProfile.profile);
router.post('/update/:id', passport.checkAuthentication, userProfile.update);



module.exports = router;