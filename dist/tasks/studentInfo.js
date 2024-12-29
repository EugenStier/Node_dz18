"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.student = void 0;
exports.printStudentInfo = printStudentInfo;
// Функция для вывода информации о студенте
function printStudentInfo(student) {
    console.log(`Name: ${student.firstName} ${student.lastName}`);
    console.log(`Grade: ${student.grade}`);
}
// Пример объекта студента
exports.student = {
    firstName: "John",
    lastName: "Doe",
    grade: 95,
};
