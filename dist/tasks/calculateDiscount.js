"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.product = void 0;
exports.calculateDiscount = calculateDiscount;
function calculateDiscount(product, discount) {
    return product.price - product.price * discount;
}
// Пример использования
exports.product = { name: "Laptop", price: 1000 };
