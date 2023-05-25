import { Application} from 'express';
let express = require('express');
let cors = require('cors')

const app : Application = express();

// application routes
import bookRoutes from './app/modules/book/book.route';

// using cors
app.use(cors());

// parse data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// app.get('/api/v1/book', userRoutes);
app.use('/api/v1/book', bookRoutes);

export default app;