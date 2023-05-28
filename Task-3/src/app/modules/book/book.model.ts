import {Schema, model, Model, Query} from 'mongoose';
import { IBook} from "./book.interface";
const BookSchema = new Schema<IBook>({
    title: { type: String, required: true },
    author: { type: [String], required: true },
    genre: { type: String, required: true },
    publicationYear: { type: Number, required: true },
    publisher: {
        name: { type: String, required: true },
        location: { type: String, required: true },
    },
    reviews: [
        {
            user: { type: String, required: true },
            comment: { type: String, required: true },
        },
    ],
    rating: { type: Number, required: true },
    price: { type: String, required: true },
    featured: { type: String, required: false },
});

interface IBookModel extends Model<IBook> {
    findFeaturedBooks(): Query<IBook[], IBook>;
}

BookSchema.statics.findFeaturedBooks = async function (): Promise<IBook[]> {
    try {
        const featuredBooks = await this.find({ rating: { $gte: 4 } });

        const updatedFeaturedBooks = featuredBooks.map((book) => {
            if (book.rating >= 4.5) {
                book.featured = 'BestSeller';
            } else {
                book.featured = 'Popular';
            }
            return book;
        });

        return updatedFeaturedBooks;
    } catch (error) {
        // Handle error
        console.error('Error finding featured books:', error);
        throw error;
    }
};
const Book = model<IBook, IBookModel>('Book', BookSchema);

export { Book };