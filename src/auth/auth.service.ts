import { InjectRepository } from '@nestjs/typeorm';
import { User } from '../models/User.entity';
import { Injectable } from '@nestjs/common';
import { Auth } from '../dto/auth.dto';
import { Repository } from 'typeorm';

@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(User)
    private userRepo: Repository<User>,
  ) {}

  async auth(auth: Auth): Promise<any> {
    const user = await this.userRepo.findOneOrFail({
      where: { email: auth.email },
    });
    return user;
  }
  async auth2(auth: Auth): Promise<any> {
    const user = await this.userRepo.findOneOrFail({
      where: { email: auth.email },
    });
    return user;
  }
}
