let add1 = (a: number, b: number): number => { return a + b }; // <1>
let add2 = (a: number, b: number): number => a + b; // <2>
let lenStr1 = (s: string): number => s.length; // <3>
let lenStr2 = (s: string): number => s.length; // <4> (penambahan tipe data untuk konsistensi)

// Penggunaan arrow function // <5>
console.log(add1(2, 3));
console.log(add2(2, 3));
console.log(lenStr1("abcdefg"));
console.log(lenStr2("abcdefg"));