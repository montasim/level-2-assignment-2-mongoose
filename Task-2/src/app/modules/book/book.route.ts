let express = require('express');
import { findBooksUsingGenre} from './book.controller';
const router = express.Router();

router.get('/genre/:genre', findBooksUsingGenre);

export default router;