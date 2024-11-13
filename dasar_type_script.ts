let isFinished: boolean = false;
console.log(isFinished, typeof isFinished);

let price: number = 150.34;
console.log(price, typeof price);

let numOfEmployees: number = 25;
console.log(numOfEmployees, typeof numOfEmployees);

let progLang: string = "TypeScript";
console.log(progLang, typeof progLang);

let university: string[] = ['UT', 'UGM', 'ITB'];
console.log(university, typeof university);

let employee: [number, string, boolean, number, string];
employee = [1, "Wisnu", true, 20, "Graphic Design"];
console.log(employee, typeof employee);

enum Color {
    Black = 2,
    Blue,
    Yellow,
    Green = 3,
    Red = 3 * 3
}
console.log(Color, typeof Color);

let code: string | number;
console.log(code, typeof code);

code = 'my code';
console.log(code, typeof code);

code = 21;
console.log(code, typeof code);

let valueNull = null;
console.log(valueNull, typeof valueNull);

let valueUndefined = undefined;
console.log(valueUndefined, typeof valueUndefined);

let valueAny: any;
console.log(valueAny, typeof valueAny);

valueAny = true;
console.log(valueAny, typeof valueAny);

valueAny = 42;
console.log(valueAny, typeof valueAny);

valueAny = "TypeScript";
console.log(valueAny, typeof valueAny);

valueAny = [];
console.log(valueAny, typeof valueAny);

valueAny = {};
console.log(valueAny, typeof valueAny);

valueAny = Math.random;
console.log(valueAny, typeof valueAny);

valueAny = null;
console.log(valueAny, typeof valueAny);

valueAny = undefined;
console.log(valueAny, typeof valueAny);

let valueUnknown: unknown;
console.log(valueUnknown, typeof valueUnknown);

valueUnknown = true;
console.log(valueUnknown, typeof valueUnknown);

valueUnknown = 42;
console.log(valueUnknown, typeof valueUnknown);

valueUnknown = "TypeScript";
console.log(valueUnknown, typeof valueUnknown);

valueUnknown = [];
console.log(valueUnknown, typeof valueUnknown);

valueUnknown = {};
console.log(valueUnknown, typeof valueUnknown);

valueUnknown = Math.random;
console.log(valueUnknown, typeof valueUnknown);

valueUnknown = null;
console.log(valueUnknown, typeof valueUnknown);

valueUnknown = undefined;
console.log(valueUnknown, typeof valueUnknown);
