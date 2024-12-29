export interface Employee {
  name: string;
  salary: number;
}

// Функция для получения массива зарплат
export function getSalaries(employees: Employee[]): number[] {
  return employees.map((employee) => employee.salary);
}

// Пример массива сотрудников
export const employees: Employee[] = [
  { name: "John", salary: 50000 },
  { name: "Jane", salary: 60000 },
  { name: "Mike", salary: 45000 },
];
