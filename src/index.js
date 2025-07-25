import dotenv from 'dotenv';

import connectDB from './db/index.js';
import { app } from './app.js';
import { SERVER_PORT } from './constants.js';

dotenv.config({
  path: './env',
});

connectDB()
  .then(() => {
    app.on('error', (err) => {
      console.error('Error: ', err);
      throw err;
    });

    app.listen(SERVER_PORT, () => {
      console.log('Server is running at port: ', SERVER_PORT);
    });
  })
  .catch((err) => {
    console.error('Mongo DB connection failed! ', err);
  });

/* 
Approach 1 : connecting DB and app in one file
import express from 'express'

const app = express()

;(async () => {
  try {
    await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
    app.on("error", (error) => {
      console.log("ERROR: ", error)
      throw error
    })

    app.listen(process.env.PORT, () => {
      console.log(`App is listening on port ${process.env.PORT}`)
    })
  } catch (error) {
    console.error("ERROR: ", error)
    throw error
  }
})()
*/
