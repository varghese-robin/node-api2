// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

// var obj = new ObjectID();
// console.log(obj); //can be used to create our own object IDs and set it to create records

MongoClient.connect('mongodb://localhost:27017/TodoApp2', {
  useNewUrlParser: true
},(err,client) => {
  if(err) {
    return console.log('Unable to connect to the MongoDB server');
  }

  console.log('Connected to MongoDB server');
  const db = client.db('TodoApp2');

  // db.collection('Todos2').insertOne({
  //   text: "Doing something again",
  //   completed: false
  // }, (err,result) => {
  //   if(err) {
  //     return console.log('Unable to insert Todos', err);
  //   }
  //
  //   console.log(JSON.stringify(result.ops, undefined, 2));
  //
  // });

  db.collection('Users').insertOne({
    name: 'Mikku',
    age: 30,
    location: 'London'
  }, (err,result) => {
    if(err) {
      return console.log('Unable to insert Users', err);
    }

    console.log(JSON.stringify(result.ops, undefined, 2));
  });

  client.close();

});
