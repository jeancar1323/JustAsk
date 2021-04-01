import { NotFoundException } from '../exception-filters/notFound.exception';
import { UserDto } from './../dto/user.dto';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from '../models/User.entity';
import { Repository } from 'typeorm';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private usersRepo: Repository<User>,
  ) {}
  async create(user: UserDto): Promise<User> {
    const salt = bcrypt.genSaltSync(10);
    user.password = bcrypt.hashSync(user.password, salt);
    const newUser = this.usersRepo.create(user);
    return await this.usersRepo.save(newUser);
  }
  async getAll(): Promise<User[]> {
    return await this.usersRepo.find();
  }
  async getOne(id: number): Promise<any> {
    try {
      return await this.usersRepo.findOneOrFail(id);
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
