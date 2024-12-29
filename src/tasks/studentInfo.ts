export interface Person {
  firstName: string;
  lastName: string;
}

export interface Student extends Person {
  grade: number;
}

// Функция для вывода информации о студенте
export function printStudentInfo(student: Student): void {
  console.log(`Name: ${student.firstName} ${student.lastName}`);
  console.log(`Grade: ${student.grade}`);
}

// Пример объекта студента
export const student: Student = {
  firstName: "John",
  lastName: "Doe",
  grade: 95,
};
