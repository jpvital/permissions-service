import { Role } from "src/roles/interfaces/role.interface";

export class createUserDto {
    readonly username: string;
    readonly email: string;
    readonly password: string;
    readonly avatar: string;
    readonly roles: Role[];
}