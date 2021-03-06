import { Entity, PrimaryColumn } from 'typeorm';
import { IsNotEmpty } from 'class-validator';

@Entity()
export class Role {
    @PrimaryColumn('varchar')
    @IsNotEmpty()
    name: string;
}
