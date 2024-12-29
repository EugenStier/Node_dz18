// Объект Car
export interface Car {
  make: string;
  model: string;
  engine: {
    type: string;
    horsepower: number;
  };
  year?: number; // Опциональное поле
}

// Функция для вывода информации о машине
export function printCarInfo(car: Car): void {
  console.log(`Make: ${car.make}, Model: ${car.model}`);
  console.log(
    `Engine: ${car.engine.type}, Horsepower: ${car.engine.horsepower}`
  );
  if (car.year) {
    console.log(`Year: ${car.year}`);
  }
}

// Пример объекта
export const car: Car = {
  make: "Toyota",
  model: "Corolla",
  engine: {
    type: "Hybrid",
    horsepower: 120,
  },
  year: 2022,
};
