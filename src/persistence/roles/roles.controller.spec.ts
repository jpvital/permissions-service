import { Test, TestingModule } from '@nestjs/testing';
import { RolesController } from './roles.controller';
import { Injectable } from '@nestjs/common';
import { CreateRoleDto } from './dto/create-role.dto';

@Injectable()
export class RolesService {
    findAll(): number { return 1; }
    create(): number { return 1; }
}

describe('Roles Controller', () => {
  let controller: RolesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ RolesController ],
      providers: [RolesService],
    }).compile();
    controller = module.get<RolesController>(RolesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  it('findAll call on controller should trigger service call', () => {
    const findAllSpy = jest.spyOn(RolesService.prototype, 'findAll');
    controller.findAll();
    expect(findAllSpy).toBeCalled();
  });

  it('create call on controller should trigger service call', () => {
    const newRole: CreateRoleDto = {
      name: 'Administrator',
    };
    const findAllSpy = jest.spyOn(RolesService.prototype, 'create');
    controller.create(newRole);
    expect(findAllSpy).toBeCalledWith(newRole);
  });
});
