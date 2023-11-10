import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class AuthInfo {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ type: 'varchar', length: 255, nullable: true })
    email: string;

    @Column({ type: 'int', width: 50, nullable: true })
    enroll: number;

    @Column({ type: 'varchar', length: 512, nullable: true })
    password: string;
}
