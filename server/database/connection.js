const { MongoClient } = require('mongodb');

function dbConnection() {
  const uri = 'mongodb://localhost:27017'; 
  const client = new MongoClient(uri, { useUnifiedTopology: true });

  return client.connect();
}

module.exports = dbConnection;
