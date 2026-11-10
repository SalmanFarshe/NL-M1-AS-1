# The Union and Intersection Operation for Type Joining in TypeScript

In TypeScript we can join many types and store it into one, and this is a very powerful feature in TS. For joining types, we can use the **Union (`|`)** and **Intersection (`&`)** operators.

### 1. Union Type (`|`)

The **Union Type** is exactly like an "OR" condition. It means a variable can hold a value of **Type A OR Type B** at a time. It is very useful when a variable can store multiple types of data.

#### For Example:
Let's say you are making a payment system where a user can pay using a credit card number (`string`) or via cash where they just pass an amount (`number`). Also, payment status can be only `"Success"`, `"Failed"`, or `"Pending"`.

```typescript
// Union with Primitive types
type PaymentID = string | number; // Can be string or number

const onlinePayment: PaymentID = "TXN-9481";
const cashPayment: PaymentID = 7000;

// Union with Literals
type PaymentStatus = "Success" | "Failed" | "Pending";

const currentStatus: PaymentStatus = "Success";
```

The `PaymentID` can take either a string or a number. If we try to assign a boolean (`true`/`false`), then it will throw an error.

---

### 2. Intersection Type (`&`)

The **Intersection Type** is like an "AND" condition. It joins multiple types into **one single type**. So the final result must have all the properties.

#### For Example:
Let's say we have a basic `User` profile. But if someone becomes an `Admin`, they keep all the user info and get extra admin properties.

```typescript
type User = {
  name: string;
  email: string;
};

// Admin permissions
type AdminPermissions = {
  role: string;
  canDeleteUser: boolean;
};

// Combining using Intersection (&)
type AdminUser = User & AdminPermissions;

// AdminUser must have all 4 properties
const mainAdmin: AdminUser = {
  name: "Salman Farshe",
  email: "salman@gmail.com",
  role: "SuperAdmin",
  canDeleteUser: true,
};
```

If we miss even one property (like `canDeleteUser`), TypeScript will throw an error because Intersection demands **everything joined**.

---

## Conclusion
We can use **Union (`|`)** when we want flexibility and a variable can accept different types of values or specific strings. And we use **Intersection (`&`)** when we want to extend or merge multiple object shapes together into a single, complete type.