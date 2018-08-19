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

  // db.collection('Todos2').find({
  //   _id: new ObjectID('5b79b845776813086c6cb122')
  // }).toArray().then((docs) => {
  //   console.log('Todos2');
  //   console.log(JSON.stringify(docs, undefined, 2));
  // }, (err) => {
  //   console.log('Unable to fetch Todos', err);
  // })

  // db.collection('Todos2').find().count().then((count) => {
  //   console.log(`Todos2 count: ${count}`);
  // }, (err) => {
  //   console.log('Unable to fetch Todos', err);
  // });

  // db.collection('Users').find({name: 'Mikku'}).toArray().then((docs) => {
  //   console.log("Users");
  //   console.log(JSON.stringify(docs, undefined, 2));
  // }, (err) => {
  //   console.log('Unable to fetch Users', err);
  // });

  db.collection('Users').find().count().then((count) => {
    console.log("Users");
    console.log(count);
  }, (err) => {
    console.log('Unable to fetch Users', err);
  });

  //client.close();

});
