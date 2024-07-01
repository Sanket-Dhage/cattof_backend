const express = require('express');
const catoffIntegration = require('./catoffIntegration');
const zkproof = require('./zkproof');

const app = express();
const port = 3000;

app.use(express.json());

app.get('/', (req, res) => {
  res.send('Welcome to the Catoff-Reclaim Integration Provider');
});

app.use('/catoff', catoffIntegration);
app.use('/zkproof', zkproof);

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
