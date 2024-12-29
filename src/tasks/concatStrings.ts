export interface ConcatStrings {
  (str1: string, str2: string): string;
}

// Реализация функции
export const concatStrings: ConcatStrings = (str1, str2) => {
  return str1 + str2;
};

// Пример использования
export const result = concatStrings("Hello, ", "World!");
