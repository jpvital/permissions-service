import { Role } from "../../roles/entities/role.entity";
import { IsEmail, IsNotEmpty, IsArray, MinLength, ValidateNested } from 'class-validator';
import { Type } from "class-transformer";

export class createUserDto {
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
    readonly roles: Role[];
}