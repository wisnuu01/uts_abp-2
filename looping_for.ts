for (let i = 0; i < 3; i++) { // <1>
    console.log("Looping ke " + i);
}

let arr = ["nilai 1", "nilai 2", "nilai 3", "nilai 4"];

for (let nilai of arr) { // <2>
    console.log(nilai);
}

for (let index1 in arr) { // <3>
    console.log(index1);
}
console.log(index1); // <4>

for (let index2 in arr) { // <5>
    console.log(index2);
}
// console.log(index2) // <6>

let str = "Universitas Mayasari Bakti";
for (let huruf of str) { // <7>
    console.log(huruf);
}