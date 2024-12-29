"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.result = exports.concatStrings = void 0;
// Реализация функции
const concatStrings = (str1, str2) => {
    return str1 + str2;
};
exports.concatStrings = concatStrings;
// Пример использования
exports.result = (0, exports.concatStrings)("Hello, ", "World!");
