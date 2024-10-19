import { BookRepo } from "../domain/interfaces";
class GetAllBooks {
  constructor(private bookRepo: BookRepo) {}

  async execute() {
    return await this.bookRepo.findAll();
  }
}
export default GetAllBooks;
