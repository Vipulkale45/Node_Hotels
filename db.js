const mongoose = require('mongoose');

//Define the mongodb connection URL

const mongoURL = 'mongodb://127.0.0.1:27017/hotels'

//setup mongodb connection

mongoose.connect(mongoURL,{
    //useNewUrlParser: true,
    //useUnifiedTopology:true
})

// Get the default connection
// Mongoose maintains a default connection object representing the mongodb connection

const db = mongoose.connection;

//Define event listeners for database connection

db.on('connected', ()=>{
    console.log('Connected to mongodb server');
})
db.on('error', ()=>{
    console.log('Connected to mongodb error');
})
db.on('disconnected', ()=>{
    console.log('Connected to mongodb disconnected');
})

//export the data base
module.export=db;