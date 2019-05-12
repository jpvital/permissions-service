import { Test, TestingModule } from '@nestjs/testing';
import { UsersController } from './users.controller';
import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';

@Injectable()
export class UsersService {
    findAll(): number { return 1; }
    create(): number { return 1; }
}

describe('Users Controller', () => {
  let controller: UsersController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ UsersController ],
      providers: [UsersService],
    }).compile();
    controller = module.get<UsersController>(UsersController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  it('findAll call on controller should trigger service call', () => {
    const findAllSpy = jest.spyOn(UsersService.prototype, 'findAll');
    controller.findAll();
    expect(findAllSpy).toBeCalled();
  });

  it('create call on controller should trigger service call', () => {
    const newUser: CreateUserDto = {
      username: 'Campos',
      password: 'testPassword123',
      email: 'hello@c.com',
      avatar: 'slash.png',
      roles: [{ name: 'Administrator' }, { name: 'Owner' }],
    };
    const findAllSpy = jest.spyOn(UsersService.prototype, 'create');
    controller.create(newUser);
    expect(findAllSpy).toBeCalledWith(newUser);
  });
});
