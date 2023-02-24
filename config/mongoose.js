const mongoose = require('mongoose');

require('dotenv').config()
mongoose.connect('mongodb://localhost/back-track');

const db = mongoose.connection;

db.on('error', console.error.bind(console, "Error connecting to MongoDB"));


db.once('open', function(){
    console.log('Connected to Database :: MongoDB');
});


module.exports = db;

//gMahMqkZuG1dnkBp