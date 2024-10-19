import { Request, Response } from "express";
// import { GetAllBooks } from "../../use-cases";
import { DIContainer } from "../../infra/";
import { CreateBookDTO } from "../dto";
import { validate } from "class-validator";

class BookController {
  // constructor(private getAllBooks: GetAllBooks) {}
  private getAllBooks = DIContainer.getGetAllBooksUseCase();

  async getAll(_: Request, res: Response) {
    const books = await this.getAllBooks.execute();
    res.json(books);
  }

  async create(req: Request, res: Response) {
    const dto = Object.assign(new CreateBookDTO(), req.body);
    const errors = await validate(dto);

    if (errors.length > 0) {
      res.status(400).json({ errors });
    }

    res.json(JSON.stringify(dto));
  }
}
export default BookController;
