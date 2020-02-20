import { createConnection, Repository } from 'typeorm';
import { Class } from '../entities/class.entity';
import { Car } from '../entities/car.entity';
import { Contract } from '../entities/contract.entity';



const seed = async () => {
    const connection = await createConnection();
    const classRepository: Repository<Class> = connection.getRepository(Class);
    const carsRepository: Repository<Car> = connection.getRepository(Car);
    const contractsRepository: Repository<Contract> = connection.getRepository(Contract);

    // Creating classes

    const classA = classRepository.create();

    classA.className= 'A';
    classA.price =  50;

    await classRepository.save(classA);

    const classB = classRepository.create();

    classB.className = 'B';
    classB.price =  70;

    await classRepository.save(classB);

    // Creating cars

    const opelAstra = carsRepository.create();

    opelAstra.brand = 'Opel';
    opelAstra.model =  'Astra';
    opelAstra.picture =  'https://www.auto-lizingu.lt/wp-content/uploads/2019/09/opel-astra-1-6-l-hecbekas-2014-dyzelinas-13.jpg';
    opelAstra.className = Promise.resolve(classB);

    // tslint:disable-next-line: no-console
    await carsRepository.save(opelAstra);

    const vwGolf = carsRepository.create();

    vwGolf.brand = 'Volkswagen';
    vwGolf.model =  'Golf';
    vwGolf.picture =  'https://www.vwcult.com/wp-content/uploads/2014/09/fun-9071-vw1.jpg';
    vwGolf.className = Promise.resolve(classB);

    // tslint:disable-next-line: no-console
    await carsRepository.save(vwGolf);

    const vwGolf2 = carsRepository.create();

    vwGolf2.brand = 'Volkswagen';
    vwGolf2.model =  'Golf';
    vwGolf2.picture =  'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQiWYQ_9acjRQoBwLutTfj-2Gihely4BfLvpATS7P23cDvJd8ZT';
    vwGolf2.className = Promise.resolve(classB);

    // tslint:disable-next-line: no-console
    await carsRepository.save(vwGolf2);

        // Creating contracts

        const opelAstraContract1 = contractsRepository.create();

        opelAstraContract1.borrowerFistName = 'Bruce';
        opelAstraContract1.borrowerLastName = 'Wayne';
        opelAstraContract1.borrowerAge = 36;
        opelAstraContract1.startDate = '19/02/2020 5.06';
        opelAstraContract1.contractEndDate = '24/02/2020 5.06';
        opelAstraContract1.car = Promise.resolve(opelAstra);
    
        // tslint:disable-next-line: no-console
        await contractsRepository.save(opelAstraContract1);


    console.log(`Data seeded successfully`);
}

// tslint:disable-next-line: no-console
seed().catch(console.error);
