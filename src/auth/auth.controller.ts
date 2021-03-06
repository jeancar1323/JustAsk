import { AuthService } from './auth.service';
import { Body, Controller, Post, ValidationPipe } from '@nestjs/common';
import { Auth } from '../dto/auth.dto';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}
  @Post()
  async auth(@Body(new ValidationPipe()) auth: Auth): Promise<any> {
    return this.authService.auth(auth);
  }
}
