//import mongo client to connect mongo db
const MongoClient = require('mongodb').MongoClient;

//create main function to connect to mongo db cluster.
const dotenv = require('dotenv');
dotenv.config();
const MongoClient = require('mongodb').MongoClient;

let _db;

//connect the mongodb link
const url = mongodb+srv://mad22008:<db_password>@cluster0.x3vhexu.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0

const initDb = (callback) => {
  if (_db) {
    console.log('Db is already initialized!');
    return callback(null, _db);
  }
  //
  MongoClient.connect(process.env.mongodb+srv://mad22008:<db_password>@cluster0.x3vhexu.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0//mad22008:<db_password>@cluster0.x3vhexu.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0)
    .then((client) => {
      _db = client;
      callback(null, _db);
    })
    .catch((err) => {
      callback(err);
    });
};

const getDb = () => {
  if (!_db) {
    throw Error('Db not initialized');
  }
  return _db;
};

module.exports = {
  initDb,
  getDb,
};