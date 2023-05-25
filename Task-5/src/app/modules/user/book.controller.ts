import { NextFunction, Request, Response } from "express";
import {getBooksByGenre, getBooksByGenreAndPublisher, getFeaturedBooks, updateBooksPriceToInt} from "./book.service";

export const findBooksUsingGenre = async (req: Request, res: Response, next: NextFunction) => {
    const { genre } = req.params;
    const books = await getBooksByGenre(genre);

    res.status(200).json({
        status: "success",
        data: books,
    });
};

export const findBooksByGenreAndPublisher = async (req: Request, res: Response, next: NextFunction) => {
    const { genre, publisher } = req.params;
    const books = await getBooksByGenreAndPublisher(genre, publisher);

    res.status(200).json({
        status: "success",
        data: books,
    });
}

export const findFeaturedBooks = async (req: Request, res: Response, next: NextFunction) => {
    const books = await getFeaturedBooks();

    res.status(200).json({
        status: "success",
        data: books,
    });
}

export const updateBooksPrice = async (req: Request, res: Response, next: NextFunction) => {
    const books = await updateBooksPriceToInt();

    res.status(200).json({
        status: "success",
        data: books,
    });
}