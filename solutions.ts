function multiplyValue(value: number, multiplier?: number): number {
  if (multiplier !== undefined) {
    return value * multiplier;
  } else {
    return value * 2;
  }
}

type Tinput = string | number | boolean;
type Treturn = string | number;
function processInput(value: Tinput): Treturn {
  if (typeof value === "string") {
    return value.trim().toLowerCase();
  } else if (typeof value === "number") {
    return value * 10;
  } else if (typeof value === "boolean") {
    return value ? "Active" : "Inactive";
  }
  return value;
}

function formatCoordinate(
  coordinateInfo: readonly [number, number, string],
): string {
  const [latitude, longitude, area] = coordinateInfo;
  return "Location: " + area + " (" + latitude + ", " + longitude + ")";
}

function concatenateArrays<T>(...arrays: T[][]): T[] {
  return ([] as T[]).concat(...arrays);
}

interface Course {
  title: string;
  students: number;
  isPublished: boolean;
}
function getPopularCourses(
  courseList: Course[],
  minStudents: number,
): Course[] {
  return courseList.filter(
    (course) => course.isPublished == true && course.students >= minStudents,
  );
}

function pluckValues<T, K extends keyof T>(items: T[], key: K): T[K][] {
  return items.map((item) => item[key]);
}

class Employee {
  protected name: string;
  private baseSalary: number;

  constructor(name: string, baseSalary: number) {
    this.name = name;
    this.baseSalary = baseSalary;
  }

  getDetails = () => {
    return (
      "Employee: " + [this.name] + ", " + "Base Salary: " + [this.baseSalary]
    );
  };
}

class Manager extends Employee {
  private department: string;

  constructor(name: string, baseSalary: number, department: string) {
    super(name, baseSalary);
    this.department = department;
  }
  
  getRoleInfo = () => {
    return "Manager of " + [this.department] + ": " + [this.name];
  };
}

async function validateAgeAsync(age: number): Promise<string> {
  if (age < 18) {
    throw new Error("Access Denied: Must be 18 or older");
  }
  return new Promise<string>((resolve) => {
    setTimeout(() => {
      resolve("Access Granted");
    }, 1000);
  });
}
