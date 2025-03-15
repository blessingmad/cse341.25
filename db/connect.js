//import mongo client to connect mongo db
const MongoClient = require('mongodb').MongoClient;

//import dotenv to  load enviroment varialbes from a .env file.
const dotenv = require('dotenv');
dotenv.config();

//
const MongoClient = require('mongodb').MongoClient;
//variable for database connection.
let _db;

//connect the mongodb link
const url = mongodb+srv://mad22008:<db_password>@cluster0.x3vhexu.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0


//function to start  the database connection
const initDb = (callback) => {
  if (_db) {
    console.log('Db is already initialized!');
    return callback(null, _db);
  }
  //
  MongoClient.connect(process.env.mongodb+srv://mad22008:<db_password>@cluster0.x3vhexu.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0//mad22008:<db_password>@cluster0.x3vhexu.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0)
    .then((client) => {
      _db = client;  //store database connection
      callback(null, _db);
    })
    .catch((err) => {
      callback(err); //handle connection errors.
    });a
};

// function to retrieve the database connection
const getDb = () => {
  if (!_db) {
    throw Error('Db not initialized');
  }
  return _db;
};

//export the functions for external use.
module.exports = {
  initDb,
  getDb,
};