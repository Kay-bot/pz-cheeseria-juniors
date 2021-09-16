import apiRouter from './routes';
import { ConnectionOptions } from 'tls';
import { dbUri } from './config/constants'
import express = require('express');
import mongoose = require('mongoose');

const app = express();

// Need to add  mongoDB connection string in './config/constants' 
mongoose.connect(dbUri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
} as ConnectionOptions)
.then(() => {
  console.log("Database connected");
})
.catch((error) => {
  console.log("db error", error);
  process.exit(1);
});

app.use(express.static('public'));
app.use(apiRouter);

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Server listening on port: ${port}`));