const express = require('express');
const cors = require('cors');
const { MongoClient, ServerApiVersion } = require('mongodb');

const app = express();

app.use(cors());
app.use(express.json());

const port = process.env.PORT || 3000;

//project1
// YDgkp6X9ReKEMftF

app.get('/', (request, response) => {
  response.send('this is backend');
});

// const uri = 'mongodb://localhost:27017';
const uri =
  'mongodb+srv://project1:YDgkp6X9ReKEMftF@mernstack-cluster.2mtsqtr.mongodb.net/?retryWrites=true&w=majority';

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

    app.get('/person', async (request, response) => {
      const cursor = dataCollections.find();
      const result = await cursor.toArray();
      response.send(result);
    });

    app.post('/person', async (request, response) => {
      const newData = request.body;
      const result = await dataCollections.insertOne(newData);
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
