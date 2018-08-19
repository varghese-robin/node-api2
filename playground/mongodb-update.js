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

  // db.collection('Todos2').findOneAndUpdate({
  //   _id: new ObjectID('5b79c39d44f56ebd3bacf8d0')
  // },{
  //   $set: {
  //     text: 'Run the cat'
  //   }
  // }, {
  //   returnOriginal: false
  // }).then((result) => {
  //   console.log(result);
  // })

  db.collection('Users').findOneAndUpdate({
    _id: new ObjectID('5b79bb38069c0b08be3962d2')
  }, {
    $inc: {
      age: 1
    },
    $set: {
      name: 'John'
    }
  }, {
    returnOriginal: false
  }).then((result) => {
    console.log(result);
  })



  //client.close();

});
