
/*
var add = function(a,b)
{
    return a+b;
}

var add=(a,b)=>{return a+b}

var add = (a,b)=>a+b;

var resut = add(45,5);
console.log(resut);

(function(){
    console.log("Vipul here..")
})()


function callback(){
    console.log("now adding is successful complete.");
}

const add = function(a , b, callback)
{
    
    var resut = a+b;
    console.log('result:' + resut);
    callback();
}
add(3,638,callback)


const add = function(a,b, prince)
{
    var result = a+b;
    console.log("result: " + result);
    prince();
}

add(2,3,()=> console.log("add completed"))


var fs = require('fs');
var os = require('os');

var user = os.userInfo();
console.log(user);
console.log(user.username)

fs.appendFile('greeting.txt', 'Hi'+ user.username+'!\n', ()=>{
    console.log('file is created')
});

console.log(os);
console.log(fs)


const notes = require('./notes');
console.log("server is availble")

var age = notes.age;

var result = notes.addNumber(age+18, 10);

console.log(age);
console.log('result is now '+ result);

const jsonString = '{"name": "john", "age": 30, "city":"new york"}';
const jsonObject = JSON.parse(jsonString);
console.log(jsonObject.name);*/


/*
app.get('/chicken', (req, res)=>{
    res.send('sure sir , i would love to serve chicken')
})

app.get('/idli', (req, res)=>{
    var customized_idli={
        name: 'rava idli',
        size: '10 cm diameter',
        is_sambhar: true,
        is_chutney: false
    }
    res.send(customized_idli)
})

app.get('/misal', (req,res)=>{
    res.send('welcome sure sir, i would love serve misal')
})

app.post('/items', (req, res)=>{
    res.send("data is saved");
})*/

 
const express = require('express')
const app = express()
const db = require('./db'); 

const bodyParser = require('body-parser');
app.use(bodyParser.json()); //req.body

app.get('/', (req, res) => {
  res.send('welcome to my hotel ...')
})

//import the router files
const personRoutes = require('./routes/personRoutes');
const menuItemRoutes = require('./routes/menuItemRoutes');

//use the routes
app.use('/person' , personRoutes);
app.use('/menu' , menuItemRoutes);

app.listen(3000, ()=>{
    console.log('listening on port 3000');
})
 