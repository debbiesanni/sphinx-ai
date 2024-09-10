import { StudentInt } from "@/Utils/type";
import { faker } from "@faker-js/faker";

function generateRandomInteger(min: number, max: number) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

export const studentData = () => {
  const listStudents: StudentInt[] = [];

  const studentDetails = () => {
    return {
      id: faker.string.uuid(),
      forename: faker.person.firstName(),
      surname: faker.person.lastName(),
      form: `${generateRandomInteger(1, 9)}${faker.string.alphanumeric(1)}`,
      send: faker.datatype.boolean(),
      avatar: faker.image.avatar()
    };
  };

  for (let i = 0; i < 100; i++) listStudents.push(studentDetails());

  return { listStudents, studentDetails };
};