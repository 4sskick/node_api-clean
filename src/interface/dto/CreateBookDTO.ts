import { IsDate, IsString } from "class-validator";

class CreateBookDTO {
  @IsString()
  title!: string;

  @IsString()
  author!: string;

  @IsDate()
  publishedDate!: Date;
}

export default CreateBookDTO;
