import { Schema, model } from 'mongoose';
import { IBook } from './book.interface'

const BookSchema = new Schema<IBook>({
    title: { type: String, required: true },
    author: { type: [String], required: true },
    genre: { type: String, required: true },
    publicationYear: { type: Number, required: true },
    publisher: [
        {
            name: { type: String, required: true },
            location: { type: String, required: true },
        }
    ],
    reviews: [
        {
            user: { type: String, required: true },
            comment: { type: String, required: true },
        },
    ],
    rating: { type: Number, required: true },
    price: { type: String, required: true },
});

// Create and export the Book model
const Book = model<IBook>('Book', BookSchema);


export { Book };
