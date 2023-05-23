import { IBook } from "./book.interface";
import { Book } from "./book.model";

export const getBooksByGenre = async (genre: string): Promise <IBook[]> => {
    try {
        const books = await Book.find({ genre: genre });
        return books;
    } catch (error) {
        console.error('Error finding books by genre:', error);
        throw error;
    }
};

export const getBooksByGenreAndPublisher = async (genre: string, publisher: string): Promise<IBook[]> => {
    try {
        const books = await Book.find({
            genre: genre,
            'publisher.name': publisher,
        });
        return books;
    } catch (error) {
        // Handle error
        console.error('Error finding books by genre and publisher:', error);
        throw error;
    }
}
