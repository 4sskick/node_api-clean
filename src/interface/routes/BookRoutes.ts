import { BookController } from "../controllers";
// import { GetAllBooks } from "../../use-cases/";
// import { InMemoryBookRepository } from "../../infra/repo/";

import { Router } from "express";

const router = Router();

// const bookRepo = new InMemoryBookRepository();
// const getAllBooks = new GetAllBooks(bookRepo);
// const bookController = new BookController(getAllBooks);
const bookController = new BookController();

router.get("/books", (req, res) => {
  bookController.getAll(req, res);
});

router.post("/book", (req, res) => {
  bookController.create(req, res);
});

export default router;
