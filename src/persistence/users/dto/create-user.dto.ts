import { Role } from '../../roles/entities/role.entity';
import { IsEmail, IsNotEmpty, IsArray, MinLength, ValidateNested, ValidationOptions, registerDecorator } from 'class-validator';
import { Type } from 'class-transformer';

export const MinimumRoles = (property: string, validationOptions?: ValidationOptions) => {
    return (object: object, propertyName: string) => {
         registerDecorator({
             name: 'minimumRoles',
             target: object.constructor,
             propertyName,
             constraints: [property],
             options: validationOptions,
             validator: {
                 validate(value: any) {
                     return value.length >= 2; // you can return a Promise<boolean> here as well, if you want to make async validation
                 },
             },
         });
    };
 };

export class CreateUserDto {
    @IsNotEmpty()
    @MinLength(5)
    readonly username: string;

    @IsEmail()
    readonly email: string;

    @IsNotEmpty()
    @MinLength(8)
    readonly password: string;

    @IsNotEmpty()
    readonly avatar: string;

    @IsArray()
    @IsNotEmpty()
    @Type(() => Role)
    @ValidateNested({ each: true })
    @MinimumRoles('roles', { message: 'User must be assigned at least two roles.' })
    readonly roles: [Role, Role];
}
