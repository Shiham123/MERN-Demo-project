const express = require('express');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(express.json());

const port = process.env.PORT || 3000;

app.get('/', (request, response) => {
  response.send('this is backend');
});

app.listen(port, () => {
  console.log(`server running at http://localhost:${port}`);
});
