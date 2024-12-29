// Типы Admin и User
export type Admin = {
  name: string;
  permissions: string[];
};

export type User = {
  name: string;
  email: string;
};

// Объединённый тип AdminUser
export type AdminUser = Admin & User;

// Пример объекта типа AdminUser
export const adminUser: AdminUser = {
  name: "Alice",
  permissions: ["read", "write", "delete"],
  email: "alice@example.com",
};
