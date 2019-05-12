import { Test, TestingModule } from '@nestjs/testing';
import { RolesService } from './roles.service';
import { Role } from './entities/role.entity';
import { Repository } from 'typeorm';
import { getRepositoryToken } from '@nestjs/typeorm';
import { MockType, repositoryMockFactory } from '../../mocks/utils';
import { CreateRoleDto } from './dto/create-role.dto';

describe('RolesService', () => {
  let service: RolesService;
  let repositoryMock: MockType<Repository<Role>>;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        RolesService,
        // Provide your mock instead of the actual repository
        { provide: getRepositoryToken(Role), useFactory: repositoryMockFactory },
      ],
    }).compile();
    service = module.get<RolesService>(RolesService);
    repositoryMock = module.get(getRepositoryToken(Role));
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
  it('should find all roles', async () => {
    const roles = [{name: 'Alni', id: '123'}];
    repositoryMock.find.mockReturnValue(roles);
    expect(service.findAll()).toEqual(roles);
    expect(repositoryMock.find).toHaveBeenCalled();
  });

  describe('create method', () => {
    it('method with valid payload should call db function with no errors', () => {
      const role: CreateRoleDto = {
        name: 'Administrator',
      };
      service.create(role);
      expect(repositoryMock.insert).toHaveBeenCalledWith(role);
    });
  });
});
