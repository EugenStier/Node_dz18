import { adminUser } from "./tasks/adminUser";
import { car, printCarInfo } from "./tasks/carInfo";
import { calculateDiscount, product } from "./tasks/calculateDiscount";
import { employees, getSalaries } from "./tasks/employeeSalaries";
import { student, printStudentInfo } from "./tasks/studentInfo";
import { concatStrings } from "./tasks/concatStrings";

// Задание 1: AdminUser
console.log("AdminUser:", adminUser);

// Задание 2: CarInfo
printCarInfo(car);

// Задание 3: CalculateDiscount
console.log("Discounted Price:", calculateDiscount(product, 0.1));

// Задание 4: Employee Salaries
console.log("Salaries:", getSalaries(employees));

// Задание 5: Student Info
printStudentInfo(student);

// Задание 6: ConcatStrings
console.log("Concatenated Strings:", concatStrings("Hello", " TypeScript!"));
