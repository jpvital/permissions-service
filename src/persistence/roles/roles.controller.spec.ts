import { Test, TestingModule } from '@nestjs/testing';
import { RolesController } from './roles.controller';
import { Injectable } from '@nestjs/common';
import { createRoleDto } from './dto/create-role.dto';

@Injectable()
export class RolesService {
    findAll(): void{}
    create(): void{}
};

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
  
  it('findAll call on controller should trigger service call', ()=>{
    const findAllSpy = jest.spyOn(RolesService.prototype, 'findAll');
    controller.findAll()
    expect(findAllSpy).toBeCalled();
  });
  
  it('create call on controller should trigger service call', ()=>{
    const newRole: createRoleDto = {
      name: 'Administrator',
    }
    const findAllSpy = jest.spyOn(RolesService.prototype, 'create');
    controller.create(newRole);
    expect(findAllSpy).toBeCalledWith(newRole);
  });
});
