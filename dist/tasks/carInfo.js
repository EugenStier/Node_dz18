"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.car = void 0;
exports.printCarInfo = printCarInfo;
// Функция для вывода информации о машине
function printCarInfo(car) {
    console.log(`Make: ${car.make}, Model: ${car.model}`);
    console.log(`Engine: ${car.engine.type}, Horsepower: ${car.engine.horsepower}`);
    if (car.year) {
        console.log(`Year: ${car.year}`);
    }
}
// Пример объекта
exports.car = {
    make: "Toyota",
    model: "Corolla",
    engine: {
        type: "Hybrid",
        horsepower: 120,
    },
    year: 2022,
};
