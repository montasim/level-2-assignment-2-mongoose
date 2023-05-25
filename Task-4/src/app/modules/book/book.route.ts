let express = require('express');
import {findBooksByGenreAndPublisher, findBooksUsingGenre, findFeaturedBooks} from './book.controller';
const router = express.Router();

router.get('/genre/:genre', findBooksUsingGenre);
router.get('/genre/:genre/publisher/:publisher', findBooksByGenreAndPublisher);
router.get('/getFeaturedBooks', findFeaturedBooks)

export default router;