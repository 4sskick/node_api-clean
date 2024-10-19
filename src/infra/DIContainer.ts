import { GetAllBooks } from "../use-cases";
import { InMemoryBookRepository } from "./repo";

class DIContainer {
  private static _bookRepo = new InMemoryBookRepository();

  static getBookRepo() {
    return this._bookRepo;
  }

  static getGetAllBooksUseCase() {
    return new GetAllBooks(this._bookRepo);
  }
}

export default DIContainer;
