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

    const classC = classRepository.create();

    classC.className = 'C';
    classC.price =  90;

    await classRepository.save(classC);

    const classD = classRepository.create();

    classD.className = 'D';
    classD.price =  110;

    await classRepository.save(classD);

    const classE = classRepository.create();

    classE.className = 'E';
    classE.price =  130;

    await classRepository.save(classE);

    // Creating cars
    const fordFiesta = carsRepository.create();

    fordFiesta.brand = 'Ford';
    fordFiesta.model =  'Fiesta';
    fordFiesta.picture =  'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRB_5n0jNb1OkD7JwMitM0WBDmFEKN3-eL6u4Zxr4ToIYiiOgFQ';
    fordFiesta.className = Promise.resolve(classA);

    // tslint:disable-next-line: no-console
    await carsRepository.save(fordFiesta);

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
    vwGolf2.picture =  'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQiXWt69XclyChJM0K1Ra6xSDs0MZCGPPPPi0IhPhgp8guvaas0';
    vwGolf2.className = Promise.resolve(classB);

    // tslint:disable-next-line: no-console
    await carsRepository.save(vwGolf2);

    const fordFocus = carsRepository.create();

    fordFocus.brand = 'Ford';
    fordFocus.model =  'Focus';
    fordFocus.picture =  'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSqMKu9i6dP41pq4NAuASBliNaN1MME2Iozcdtj5zaBigqCA5ij';
    fordFocus.className = Promise.resolve(classB);

    // tslint:disable-next-line: no-console
    await carsRepository.save(fordFocus);

    const fordFocus2 = carsRepository.create();

    fordFocus2.brand = 'Ford';
    fordFocus2.model =  'Focus';
    fordFocus2.picture =  'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTgxlvv03KJ05CX4lTMBFe-w9Q3bRhe0xNG0Da3pj4tom6lQCA0';
    fordFocus2.className = Promise.resolve(classB);

    // tslint:disable-next-line: no-console
    await carsRepository.save(fordFocus2);

    const MercedesAMGGTRC190 = carsRepository.create();

    MercedesAMGGTRC190.brand = 'Mercedes';
    MercedesAMGGTRC190.model =  'AMG-GTR-C190';
    MercedesAMGGTRC190.picture =  'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTsPF6q6gs_dY1VDV1KpUYZc4FzXZYAYOwzgFv1wTLHWtHrg_5-';
    MercedesAMGGTRC190.className = Promise.resolve(classD);

    // tslint:disable-next-line: no-console
    await carsRepository.save(MercedesAMGGTRC190);

    const mercedesMClass = carsRepository.create();

    mercedesMClass.brand = 'Mercedes';
    mercedesMClass.model =  'M-Class';
    mercedesMClass.picture =  'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRHMKZgVMDnO_XCfesTctpUEVLBLPXu4IAFnB_tgE87dF2rsBVv';
    mercedesMClass.className = Promise.resolve(classE);

    // tslint:disable-next-line: no-console
    await carsRepository.save(mercedesMClass);

        // Creating contracts

        const opelAstraContract1 = contractsRepository.create();

        opelAstraContract1.borrowerFirstName = 'Bruce';
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
