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
        await Book.updateMany(
            {
                publicationYear: { $gte: 2020 },
                price: { $type: 'string' },
            },
            { $set: { price: { $toInt: '$price' } } }
        );
    } catch (error) {
        console.error('Error updating book prices:', error);
        throw error;
    }
}