import { Application} from 'express';
let express = require('express');
let cors = require('cors');

const app : Application = express();

// using cors
app.use(cors());

// parse data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

export default app;