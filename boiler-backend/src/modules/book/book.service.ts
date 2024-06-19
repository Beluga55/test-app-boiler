
    import db from "../../utils/db.server";
    import { createBookBodyType } from "./book.schema";

    export async function createBook(
      input: createBookBodyType,
    ) {
      try {
        const book = await db.book.create({
          data: { ...input },
        });

        return book;
      } catch (error) {
        throw error;
      }
    }

    export async function findBook(id) {
      try {
        const book = await db.book.findFirst({
          where: {id},
        });
        return book;
      } catch (error) {
        throw error;
      }
    }

    export async function findAllBooks() {
      try {
        const books = await db.book.findMany();
        return books;
      } catch (error) {
        throw error;
      }
    }

    export async function updateBook(
      input: createBookBodyType,
      bookId: string
    ) {
      try {
        const book = await db.book.update({
          where: {
            id: bookId,
          },
          data: { ...input },
        });

        return book;
      } catch (error) {
        throw error;
      }
    }

    export async function deleteBook(id: string) {
      try {
        await db.book.delete({
          where: {
            id: id,
          },
        });
      } catch (error) {
        throw error;
      }
    }
  