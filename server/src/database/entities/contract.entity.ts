import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    OneToMany,
    ManyToOne,
    OneToOne,
} from 'typeorm';
import { Car } from './car.entity';


@Entity('contracts')
export class Contract {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column({ type: 'text', nullable: false })
    borrowerFistName: string;

    @Column({ type: 'text', nullable: false })
    borrowerLastName: string;

    @Column({ type: 'float', nullable: false })
    borrowerAge: number;

    @Column({ type: 'text', nullable: false })
    startDate: string;

    @Column({ type: 'text', nullable: false })
    contractEndDate: string;

    @Column({ type: 'text', default: 'n/a' })
    deliveredDate: string;

    @Column({ type: 'boolean', default: false })
    isDeleted: boolean;

    @ManyToOne(type => Car, car => car.contracts)
    car: Promise<Car>;


}
