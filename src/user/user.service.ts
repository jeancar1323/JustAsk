import { NotFoundException } from '../exception-filters/notFound.exception';
import { UserDto } from './../dto/user.dto';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/models/User.entity';
import { Repository } from 'typeorm';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private usersRepo: Repository<User>,
  ) {}
  async create(user: UserDto): Promise<User> {
    const newUser = this.usersRepo.create(user);
    return await this.usersRepo.save(newUser);
  }
  async getAll(): Promise<User[]> {
    return await this.usersRepo.find();
  }
  async getOne(id: number): Promise<any> {
    try {
      const pass: string = await (await this.usersRepo.findOneOrFail(id))
        .password;
      return { pass };
    } catch (error) {
      throw new NotFoundException();
    }
  }
  async deleteOne(id: number): Promise<void> {
    try {
      await this.usersRepo.findOneOrFail(id);
      await this.usersRepo.delete(id);
    } catch (error) {
      throw new NotFoundException();
    }
  }
}
