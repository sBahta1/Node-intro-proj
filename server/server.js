//require express -gives us a function
const express = require('express');

//create an instance of express by calling the function above - gives us an object
const app = express();
const port = 5000;

//express static file serving -- public is the name of the folder
app.use(express.static('server/public'));

//Start up our server
app.listen(port, ()=>{
    console.log('listening on port', port);
});