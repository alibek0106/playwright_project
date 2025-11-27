import { faker } from '@faker-js/faker';
import { StudentData, Gender, Hobby } from '../models/FormData';

export class DataFactory {

    static getRandomStudent(): StudentData {
        const genderOptions: Gender[] = ['Male', 'Female', 'Other'];
        const hobbyOptions: Hobby[] = ['Sports', 'Reading', 'Music'];
        const subjectOptions = ['Maths', 'English', 'Physics', 'Chemistry'];

        return {
            firstName: faker.person.firstName(),
            lastName: faker.person.lastName(),
            studentEmail: faker.internet.email(),
            gender: faker.helpers.arrayElement(genderOptions),
            mobile: faker.string.numeric(10),
            // Pick 1 random subject
            subjects: [faker.helpers.arrayElement(subjectOptions)],
            // Pick a random subset of hobbies
            hobbies: faker.helpers.arrayElements(hobbyOptions),
            address: faker.location.streetAddress(),
            state: 'NCR',
            city: 'Delhi',
            imagePath: 'src/utils/upload-test.jpg'
        };
    }
}