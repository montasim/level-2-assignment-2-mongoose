import {IBook} from "./book.interface";
import {Book} from "./book.model";

export const getBooksByGenre = async (genre: string): Promise <IBook[]> => {
    try {
        return await Book.find({genre: genre});
    } catch (error) {
        console.error('Error finding books by genre:', error);
        throw error;
    }
};

export const getBooksByGenreAndPublisher = async (genre: string, publisher: string): Promise<IBook[]> => {
    try {
        return await Book.find({
            genre: genre,
            'publisher.name': publisher,
        });
    } catch (error) {
        // Handle error
        console.error('Error finding books by genre and publisher:', error);
        throw error;
    }
}

export const getFeaturedBooks = async () => {
    try {
        return await Book.findFeaturedBooks();
    } catch (error) {
        // Handle error
        console.error('Error finding featured books', error);
        throw error;
    }
}

export const updateBooksPriceToInt = async () => {
    try {
      const booksToUpdate = await Book.aggregate([
        { $match: { publicationYear: { $gt: 2020 }, price: { $type: 'string' } } },
        { $addFields: { price: { $toInt: '$price' } } }
      ]);
  
      const updateOps = booksToUpdate.map(book => ({
        updateOne: {
          filter: { _id: book._id },
          update: { $set: { price: book.price } }
        }
      }));
  
      const updatedBooksPrice = await Book.bulkWrite(updateOps);
  
      return updatedBooksPrice;
    } catch (error) {
      console.error('Error updating book prices:', error);
      throw error;
    }
  }
  