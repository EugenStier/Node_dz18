"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.employees = void 0;
exports.getSalaries = getSalaries;
// Функция для получения массива зарплат
function getSalaries(employees) {
    return employees.map((employee) => employee.salary);
}
// Пример массива сотрудников
exports.employees = [
    { name: "John", salary: 50000 },
    { name: "Jane", salary: 60000 },
    { name: "Mike", salary: 45000 },
];
