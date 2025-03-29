//1

let number = 0;

while (number <= 100) {
    console.log(`${number + 1}`);
}

//2

let number = 101;

while (number >= 1) {
    console.log(`${number - 1}`);
}

//3

for (let i = 0; i <= 100; i++) {
    if (i % 2 === 0) {
        console.log(i);
    }
}

//4

let arr = [];

for (let i = 1; i <= 10; i++) {
    arr.push(i);
}
console.log(arr);

//5

let arr = [1, 5, 3];

for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 5) {
        console.log("Есть число 5");
    }
}

//6

let arr = [1, 2, 3, 5];

for (elem of arr) {
    elem+=elem;
}
console.log(elem);

//7

let arr = [1, 2, 3];

for (elem of arr) {
    elem+=elem;
}
console.log(elem / arr.length);

//8

const number = Number(prompt("Enter number"));

let factorial = 1;
for (let i = 1; i <=number; i++) {
    factorial = factorial * i;
}
console.log(factorial);