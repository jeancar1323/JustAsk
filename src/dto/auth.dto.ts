import { IsEmail, IsNotEmpty } from 'class-validator';

export class Auth {
  @IsNotEmpty()
  @IsEmail()
  email: string;
  @IsNotEmpty()
  password: string;
}
