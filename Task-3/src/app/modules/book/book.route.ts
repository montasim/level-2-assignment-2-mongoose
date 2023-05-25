let express = require('express');
import {findBooksByGenreAndPublisher, findBooksUsingGenre} from './book.controller';
const router = express.Router();

router.get('/genre/:genre', findBooksUsingGenre);
router.get('/genre/:genre/publisher/:publisher', findBooksByGenreAndPublisher);

export default router;