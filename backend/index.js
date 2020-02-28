const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

const links = require('./app/links');

const app = express();
const port = 8080;

app.use(cors());
app.use(express.json());

const run = async () => {
  await mongoose.connect('mongodb://localhost/links', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

  app.use('/', links);

  app.listen(port, () => {
    console.log('Please try ', port)
  })
};

run().catch(e => {
  console.log(e);
});