//import database connection module
const mongodb = require('../db/connect');

// import ObjectId to work with Mongodb document IDs
const ObjectId = require('mongodb').ObjectId;

//fetch all documents from the contacts collection.
const getAll = async (req, res, next) => {
  const result = await mongodb.getDb().db().collection('contacts').find();

  //convert the results to an array and send the response
  result.toArray().then((lists) => {
    res.setHeader('Content-Type', 'application/json');

    // send the list of contacts as JSON 
    res.status(200).json(lists);
  });
};

const getSingle = async (req, res, next) => {
  const userId = new ObjectId(req.params.id);

  //fetch the document with the given ID from the 'contacts' collection
  const result = await mongodb
    .getDb()
    .db()
    .collection('contacts')
    .find({ _id: userId });

    //CONVERT THE RESULT TO AN ARRAY AND SEND THE RESPOND.
  result.toArray().then((lists) => {
    res.setHeader('Content-Type', 'application/json');
    res.status(200).json(lists[0]);
  });
};
//export the function to be used in other parts of the application.
module.exports = { getAll, getSingle };