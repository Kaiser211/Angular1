const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 8000;

// middleware
app.use(bodyParser.json())
// app.use(bodyParser.urllencoded())
app.use(express.static( __dirname + '/dist' ));

// mongoose file
require('./server/config/mongoose');

// Routes
require('./server/config/routes')(app);



app.listen(port, () => console.log(`Listening on port ${port}...`));