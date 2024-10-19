class Book {
  constructor(
    public readonly id: string,
    public title: string,
    public author: string,
    public publishDate: Date
  ) {}
}

export default Book;
