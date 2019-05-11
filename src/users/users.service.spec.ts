import { Test, TestingModule } from '@nestjs/testing';
import { UsersService } from './users.service';

describe('UsersService', () => {
  let service: UsersService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [UsersService],
    }).compile();

    service = module.get<UsersService>(UsersService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
  describe('findAll method', () => {
    it('findAll method should call db function', () => {});
  })

  describe('create method', () => {
    it('method with valid payload should call db function with no errors', () => {});
    it('duplicate usernames should result in a denied payload', () => {});
    it('invalid passwords should result in a denied payload', () => {});
    it('invalid emails should result in a denied payload', () => {});
  });
});
