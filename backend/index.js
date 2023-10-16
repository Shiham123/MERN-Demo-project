const express = require('express');
const cors = require('cors');
const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');

const app = express();

app.use(cors());
app.use(express.json());

const port = process.env.PORT || 3000;

app.get('/', (request, response) => {
  response.send('this is backend');
});

// MERNProject
// mernProjectOne

const uri = 'mongodb://localhost:27017';

// const uri =
//   'mongodb+srv://MERNProject:mernProjectOne@mernstack-project.gegxeyn.mongodb.net/?retryWrites=true&w=majority';

const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

const run = async () => {
  try {
    await client.connect();
    const database = client.db('MERNStackDB');
    const dataCollections = database.collection('practiceDB');

    const userDatabase = client.db('userDB');
    const userCollection = userDatabase.collection('user');

    const emailDatabase = client.db('emailDB');
    const emailCollection = emailDatabase.collection('emailPassword');

    app.get('/person', async (request, response) => {
      const cursor = dataCollections.find();
      const result = await cursor.toArray();
      response.send(result);
    });

    app.get('/person/:id', async (request, response) => {
      const id = request.params.id;
      const query = { _id: new ObjectId(id) };
      const result = await dataCollections.findOne(query);
      response.send(result);
    });

    app.get('/user', async (request, response) => {
      const cursor = userCollection.find();
      const users = await cursor.toArray();
      response.send(users);
    });

    app.get('/email', async (request, response) => {
      const cursor = emailCollection.find();
      const emailUser = await cursor.toArray();
      response.send(emailUser);
    });

    app.post('/person', async (request, response) => {
      const newData = request.body;
      const result = await dataCollections.insertOne(newData);
      response.send(result);
    });

    app.post('/user', async (request, response) => {
      const user = request.body;
      const result = await userCollection.insertOne(user);
      response.send(result);
    });

    app.post('/email', async (request, response) => {
      const emailUser = request.body;
      const result = await emailCollection.insertOne(emailUser);
      response.send(result);
    });

    app.put('/person/:id', async (request, response) => {
      const id = request.params.id;
      const filterId = { _id: new ObjectId(id) };

      const personData = {
        $set: {
          title: request.body.title,
          description: request.body.description,
          price: request.body.price,
        },
      };
      const result = await dataCollections.updateOne(filterId, personData);
      response.send(result);
    });

    app.patch('/email', async (request, response) => {
      const user = request.body;
      const filter = { email: user.email };
      const update = {
        $set: {
          lastLoggedAt: user.lastLoggedAt,
        },
      };

      const result = await emailCollection.updateOne(filter, update);
      response.send(result);
    });

    app.delete('/person/:id', async (request, response) => {
      const id = request.params.id;
      const query = { _id: new ObjectId(id) };
      const result = await dataCollections.deleteOne(query);
      response.send(result);
    });

    app.delete('/user/:id', async (request, response) => {
      const id = request.params.id;
      const query = { _id: new ObjectId(id) };
      const result = await userCollection.deleteOne(query);
      response.send(result);
    });

    await client.db('admin').command({ ping: 1 });
    console.log('you successfully connected to mongodb');
  } catch (error) {
    console.dir(error);
  }
};

run();

app.listen(port, () => {
  console.log(`server running at http://localhost:${port}`);
});
