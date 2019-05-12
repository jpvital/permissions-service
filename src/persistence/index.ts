import { RolesController } from '../persistence/roles/roles.controller';
import { UsersController } from '../persistence/users/users.controller';
import { UsersService } from '../persistence/users/users.service';
import { RolesService } from '../persistence/roles/roles.service';
import { RolesModule } from '../persistence/roles/roles.module';
import { UsersModule } from '../persistence/users/users.module';

export default {
    controllers: [ RolesController, UsersController ],
    providers: [ RolesService, UsersService ],
    modules: [ RolesModule, UsersModule ],
};
