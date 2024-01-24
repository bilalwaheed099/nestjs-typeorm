import { IsEmail, IsInt, IsNotEmpty, Max, Min } from 'class-validator';

export class CreateUserDto {
  @IsNotEmpty()
  firstName: string;

  @IsNotEmpty()
  lastName: string;

  @IsEmail()
  email: string;

  @IsInt()
  @Min(0)
  @Max(100)
  age: number;
}
