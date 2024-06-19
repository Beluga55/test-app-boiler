
    import type { Request, Response } from "express";
    import { createBookBodyType } from "./book.schema";
    import {
      createBook,
      updateBook,
      deleteBook,
      findAllBooks,
      findBook,
    } from "./book.service";
    import type { payload } from "../../middlewares/check-user";

    import logger from "../../utils/logger";

    export async function createBookHandler(
      req: Request<{}, {}, createBookBodyType>,
      res: Response
    ) {
      try {
        const book = await createBook(req.body);

        return res.json(book);
      } catch (error) {
        logger.error(error);
        return res.json("Book Creation Failed");
      }
    }

    export async function updateBookHandler(
      req: Request,
      res: Response
    ) {
      try {
        const id = req.params.id as string;
        const book = await updateBook(req.body, id);

        return res.json(book);
      } catch (error) {
        logger.error(error);
        return res.json("Book Creation Failed");
      }
    }

    export async function findBookHandler(req: Request, res: Response) {
      try {
        const id = req.params.id as string;

        const book = await findBook(id);

        if (!book) {
          return res.json(
            "given book not found, you can access only those books that you have created"
          );
        }

        return res.json(book);
      } catch (error) {
        logger.error(error);
        return res.json("failed while fetching book from database");
      }
    }
    export async function findAllBookHandler(req: Request, res: Response) {
      try {
        const user = res.locals.user as payload;

        const books = await findAllBooks();

        if (!books) {
          return res.json("you currently have no books");
        }

        return res.json(books);
      } catch (error) {
        logger.error(error);
        return res.json("failed while fetching book from database");
      }
    }

    export async function deleteBookHandler(req: Request, res: Response) {
      try {
        const pid = req.params.id as string;

        await deleteBook(pid);
        return res.json("deleted book");
      } catch (error) {
        logger.error(error);
        return res.json("failed to delete all books");
      }
    }