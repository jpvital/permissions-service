import { Test, TestingModule } from '@nestjs/testing';
import { UsersService } from './users.service';
import { User } from './entities/user.entity';
import { Repository } from 'typeorm';
import { getRepositoryToken } from '@nestjs/typeorm';
import { MockType, repositoryMockFactory } from '../../mocks/utils';
import { createUserDto } from './dto/create-user.dto';

describe('UsersService', () => {
  let service: UsersService;
  let repositoryMock: MockType<Repository<User>>;


  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        UsersService,
        // Provide your mock instead of the actual repository
        { provide: getRepositoryToken(User), useFactory: repositoryMockFactory },
      ],
    }).compile();
    service = module.get<UsersService>(UsersService);
    repositoryMock = module.get(getRepositoryToken(User));
  });


  it('should be defined', () => {
    expect(service).toBeDefined();
  });
  it('should find all users', async () => {
    const users = [{name: 'Alni', id: '123'}];
    repositoryMock.find.mockReturnValue(users);
    expect(service.findAll()).toEqual(users);
    expect(repositoryMock.find).toHaveBeenCalled();
  });

  describe('create method', () => {
    it('method with valid payload should call db function with no errors', () => {
      const user: createUserDto = {
        username: 'Campos',
        password: 'testPassword123',
        email: 'hello@c.com',
        avatar: 'slash.png',
        roles: [{ name: 'Administrator' }, { name: 'Owner' }]
      }
      service.create(user);
      expect(repositoryMock.save).toHaveBeenCalledWith(user);
    });
  });
});
