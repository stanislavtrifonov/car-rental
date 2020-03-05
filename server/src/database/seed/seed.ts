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

    const bmwM3 = carsRepository.create();

    bmwM3.brand = 'Mercedes';
    bmwM3.model =  'AMG-GTR-C190';
    bmwM3.picture =  'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTsPF6q6gs_dY1VDV1KpUYZc4FzXZYAYOwzgFv1wTLHWtHrg_5-';
    bmwM3.className = Promise.resolve(classC);

    await carsRepository.save(bmwM3);

    const MercedesAMGGTRC190 = carsRepository.create();

    MercedesAMGGTRC190.brand = 'Mercedes';
    MercedesAMGGTRC190.model =  'AMG-GTR-C190';
    MercedesAMGGTRC190.picture =  'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcT_xlNfF0UhA-SXM7pj80Lb-WWp2oVDWaJZ9FpnDYwlplY2wfPd';
    MercedesAMGGTRC190.className = Promise.resolve(classD);

    // tslint:disable-next-line: no-console
    await carsRepository.save(MercedesAMGGTRC190);

    const mercedesMClass = carsRepository.create();

    mercedesMClass.brand = 'Mercedes';
    mercedesMClass.model =  'M-Class';
    mercedesMClass.picture =  `data:image/jpeg;base64,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`;
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
