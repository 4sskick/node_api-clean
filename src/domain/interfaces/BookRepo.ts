import { Book } from "../entities/";

export interface BookRepo {
  findAll(): Promise<Book[]>;
  findById(id: string): Promise<Book | null>; //will return Book or NUll
  create(book: Book): Promise<Book>;
  update(book: Book): Promise<void>;
  delete(id: string): Promise<void>;
}

// export default BookRepo;
