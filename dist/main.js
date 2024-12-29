"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const adminUser_1 = require("./tasks/adminUser");
const carInfo_1 = require("./tasks/carInfo");
const calculateDiscount_1 = require("./tasks/calculateDiscount");
const employeeSalaries_1 = require("./tasks/employeeSalaries");
const studentInfo_1 = require("./tasks/studentInfo");
const concatStrings_1 = require("./tasks/concatStrings");
// Задание 1: AdminUser
console.log("AdminUser:", adminUser_1.adminUser);
// Задание 2: CarInfo
(0, carInfo_1.printCarInfo)(carInfo_1.car);
// Задание 3: CalculateDiscount
console.log("Discounted Price:", (0, calculateDiscount_1.calculateDiscount)(calculateDiscount_1.product, 0.1));
// Задание 4: Employee Salaries
console.log("Salaries:", (0, employeeSalaries_1.getSalaries)(employeeSalaries_1.employees));
// Задание 5: Student Info
(0, studentInfo_1.printStudentInfo)(studentInfo_1.student);
// Задание 6: ConcatStrings
console.log("Concatenated Strings:", (0, concatStrings_1.concatStrings)("Hello", " TypeScript!"));
