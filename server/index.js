const mongoose = require('mongoose');
const express = require('express');
const userController = require('./controllers/userController');
const authenticationController = require('./controllers/authenticationController');

const { SERVER_RUNNING, DB_CONNECTION_ERROR, DB_CONNECTED } = require('./constants/serverMessages');

require('dotenv').config();
const cors = require('./middlewares/corsMiddleware');

start();

async function start() {
    try {
        await mongoose.connect(process.env.DB_URL);
        console.log(DB_CONNECTED);
    } catch (err) {
        console.log(DB_CONNECTION_ERROR);
        return process.exit(1);
    }

    const app = express();

    app.use(express.urlencoded({ extended: true }));
    app.use(express.json());
    app.use(cors());
    app.use('/users', userController);
    app.use('/authenticate', authenticationController);

    app.listen(3030, () => console.log(SERVER_RUNNING));
}