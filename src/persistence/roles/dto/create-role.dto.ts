import { IsNotEmpty } from "class-validator";

export class createRoleDto {
    @IsNotEmpty()
    readonly name: string;
}