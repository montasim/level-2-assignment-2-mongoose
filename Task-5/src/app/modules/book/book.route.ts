let express = require('express');
import {
    findBooksByGenreAndPublisher,
    findBooksUsingGenre,
    findFeaturedBooks,
    updateBooksPrice
} from './book.controller';
const router = express.Router();

router.get('/genre/:genre', findBooksUsingGenre);
router.get('/genre/:genre/publisher/:publisher', findBooksByGenreAndPublisher);
router.get('/getFeaturedBooks', findFeaturedBooks);
router.patch('/updateBooksPrice', updateBooksPrice);

export default router;