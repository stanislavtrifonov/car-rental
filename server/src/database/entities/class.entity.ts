import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    OneToMany,
    ManyToOne,
    OneToOne,
} from 'typeorm';


@Entity('classes')
export class DebtRequest {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column({ type: 'text', nullable: false })
    class: string;

    @Column({ type: 'float', nullable: false })
    amount: number;

    @Column({ type: 'boolean', default: false })
    isDeleted: boolean;

}
