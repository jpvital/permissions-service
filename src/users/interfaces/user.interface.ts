import { Role } from "src/roles/interfaces/role.interface";

export interface User {
    username: string,
    email: string,
    password: string,
    avatar: string,
    roles: Role[],
}