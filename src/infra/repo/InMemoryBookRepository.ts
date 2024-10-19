import { Book } from "../../domain/entities";
import { BookRepo } from "../../domain/interfaces";

class InMemoryBookRepository implements BookRepo {
  private books: Book[] = [];

  async findAll(): Promise<Book[]> {
    return this.books;
  }
  async findById(id: string): Promise<Book | null> {
    return this.books.find((b) => b.id == id) || null; //in case not found then return null
  }
  async create(book: Book): Promise<Book> {
    this.books.push(book);
    return book;
  }
  async update(book: Book): Promise<void> {
    const tmp = await this.findById(book.id);
    if (!!tmp) {
      const idx = this.books.findIndex((b) => b.id == tmp.id);
      if (idx !== -1) {
        this.books[idx] = book;
      }
    }
  }
  async delete(id: string): Promise<void> {
    this.books = this.books.filter((b) => b.id !== id);
  }
}

export default InMemoryBookRepository;
