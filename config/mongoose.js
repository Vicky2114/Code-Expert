const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://vicky:vicky@cluster0.syoeipa.mongodb.net/back-track?retryWrites=true&w=majority');

const db = mongoose.connection;

db.on('error', console.error.bind(console, "Error connecting to MongoDB"));


db.once('open', function(){
    console.log('Connected to Database :: MongoDB');
});


module.exports = db;

//gMahMqkZuG1dnkBp