//import the required modules
const express = require('express'); // express framework for handling server logic
const bodyParser = required('body-parser'); //middleware for parsing JSON  request bodies
const mongodb = require('./db/connect'); //import database connection modules

//Define port number
const port = process.env.PORT || 8080;

// initialize the express application
const app = express();

app
    // use bodyParser to parse incoming JSON request.
  .use(bodyParser.json())
  // middleware to allow cross-origin request
  .use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*'); // Allow request from any origin
    next();  // move to the next middleware.
  })

  //define routes (import from wexternal route module)
  .use('/', require('./routes'));

  // initialize database connection
mongodb.initDb((err, mongodb) => {
  if (err) {
    console.log(err); // log error if db connection fails
  } else {
    // start the server and listen on the mentioned port
    app.listen(port);
    console.log(`Connected to DB and listening on ${port}`);
  }
});