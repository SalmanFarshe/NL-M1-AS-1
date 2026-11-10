# Type vs Interface in TypeScript

We all know that TypeScript is more powerful than JavaScript because of its typing features. Type aliases and interfaces are both great to go for easy type assignment, but here are some differences between them.

We can say that type aliases are connected to making exact types, while interface is more easy and handy with object making. An interface can also inherit other interfaces just like OOP does.

Let's have some examples and understand how they differ.

Let's say you need an ID number; it may be a number or string combination. Or you need to design an order status update, so it will be either `"Pending"`, `"Delivered"`, or `"Cancelled"`.

```typescript
// 1. Union Type (Primitive & Custom values)
type ID = string | number; // it can be a string or a number
type OrderStatus = "Pending" | "Delivered" | "Cancelled";

const currentStatus: OrderStatus = "Pending";
const userId: ID = "USER-10293";

// 2. Type Alias for object
type User = {
  name: string;
  age: number;
  status: OrderStatus;
};

const currentUser: User = {
  name: "Salman Farshe",
  age: 25,
  status: currentStatus,
};
```
Here we can assign preset data types to the variables.

And when thinking about the interface, we have a structure like that. Let's say you wanna make a blueprint of a car:

```typescript
// The interface is like a blueprint
interface Car {
  brand: string;
  speed: number;
  startEngine(): void;
}

// This is a product of the blueprint
const myCar: Car = {
  brand: "Toyota",
  speed: 120,
  startEngine() {
    console.log("Engine started!");
  }
};
```

Then what is the main difference between them?

### 1. Merging
If we make duplicate or more than one interface with the same declaration, TypeScript will merge all into one automatically behind the scenes and no error will be shown. But type aliases will show an error.

For example:

```typescript
// Will Merge
interface Employee {
  name: string;
}
interface Employee {
  salary: number;
}

// Will be an error
type Student = { name: string; };
type Student = { roll: number; }; // Error: Duplicate identifier
```

### 2. Inherit or Extend
We can inherit or extend an interface, but not a type alias in the same way. Interface uses the `extends` keyword, while type alias needs an intersection (`&`).

```typescript
// Extendable as OOP
interface Animal {
  name: string;
}
interface Dog extends Animal {
  bark(): void;
}

// Needs Intersection (`&`)
type Vehicle = {
  wheels: number;
};
type ElectricCar = Vehicle & {
  batteryLife: number;
};
```

## Conclusion
We need to choose `interface` by default for defining object shapes. Choose `type` aliases when working with unions, primitives, or complex type manipulations.