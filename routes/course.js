const express = require('express');

const router = express.Router();

const course_controller=require('../controllers/courses_controller');

router.get('/course',course_controller.course);


module.exports = router;