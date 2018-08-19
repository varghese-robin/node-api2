// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp2', {
  useNewUrlParser: true
},(err,client) => {
  if(err) {
    return console.log('Unable to connect to the MongoDB server');
  }

  console.log('Connected to MongoDB server');
  const db = client.db('TodoApp2');

  //deleteMany
  // db.collection('Todos2').deleteMany({text: "Eat lunch"}).then((result) => {
  //   console.log(result);
  // });


  //deleteOne
  db.collection('Todos2').deleteOne({text: "Eat lunch"}).then((result) => {
    console.log(result);
  });


  //findOneAndDelete

  //client.close();

});
