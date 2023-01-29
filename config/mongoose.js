const mongoose = require('mongoose');

mongoose.connect(process.env.MONGODB_URL,{
    useNewUrlParser: true, 
    useUnifiedTopology: true,
    family: 4,
})
.then(db => console.log('DB is connected'))
.catch(err => console.log(err));
