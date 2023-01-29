const express = require('express');

const router = express.Router();

const contact_controller=require('../controllers/contact_controller');

router.get('/contact',contact_controller.contact);


module.exports = router;