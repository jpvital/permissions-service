import { Test, TestingModule } from '@nestjs/testing';
import { RolesService } from './roles.service';

describe('RolesService', () => {
  let service: RolesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [RolesService],
    }).compile();

    service = module.get<RolesService>(RolesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
  
  describe('findAll method', () => {
    it('findAll method should call db function', () => {});
  })

  describe('create method', () => {
    it('creation of roles with the same name should not be possible', () => {});
  });
});
