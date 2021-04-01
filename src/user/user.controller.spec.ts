import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from '../models/User.entity';
import { Test } from '@nestjs/testing';
import { UserController } from './user.controller';
import { UserService } from './user.service';

describe('UserController', () => {
  let userController: UserController;

  beforeEach(async () => {
    const moduleRef = await Test.createTestingModule({
      imports: [TypeOrmModule.forFeature([User])],
      controllers: [UserController],
      providers: [UserService],
    }).compile();

    userController = moduleRef.get<UserController>(UserController);
  });

  it('should be defined', () => {
    expect(userController).toBeDefined();
  });
});
