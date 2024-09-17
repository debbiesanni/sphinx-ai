"use client";
import { StudentInt } from "@/Utils/type";
import { faker } from "@faker-js/faker";
function generateRandomInteger(min: number, max: number) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

export const studentData = () => {
  const cacheKey = "STUDENT_LIST";

  const listStudents: StudentInt[] =
    (typeof window !== "undefined" &&
      JSON.parse(localStorage.getItem(cacheKey))) ||
    [];
  if (listStudents.length === 0) {
    for (let i = 0; i < 100; i++)
      listStudents.push({
        id: faker.string.uuid(),
        forename: faker.person.firstName(),
        surname: faker.person.lastName(),
        form: `${generateRandomInteger(1, 9)}${faker.string.alphanumeric(1)}`,
        send: faker.datatype.boolean(),
        avatar: faker.image.avatar()
      });
    localStorage.setItem(cacheKey, JSON.stringify(listStudents));
  }

  const studentDetails = (userId: string) =>
    listStudents.filter(({ id }) => id === userId)[0];

  return { listStudents, studentDetails };
};
