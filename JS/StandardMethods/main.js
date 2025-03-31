//1

console.log(Math.pow(2,10) + ' ' + Math.sqrt(245));

//2

let array = [4, 2, 5, 19, 13, 0, 10];
let sum = 0;

for (let i = 0; i < array.length; i++) {
    sum += Math.pow(array[i], 4);
}
console.log(Math.sqrt(sum));

//3

let number = Math.sqrt(379);

console.log(Math.round(number));
console.log(number.toFixed(1));
console.log(number.toFixed(2));

//4

console.log(Math.min(4, -2, 5, 19, -130, 0, 10));
console.log(Math.max(4, -2, 5, 19, -130, 0, 10));

//5

console.log(Math.floor(Math.random() * (100 - 1 + 1)) + 1);

//6

let str = 'я учу javascript!';
console.log(str.substr(2,3));
console.log(str.substr(6,10));
console.log(str.substring(2,5));
console.log(str.substring(6,16));
console.log(str.slice(2,5));
console.log(str.slice(6,16));

//7

let http = 'http://qwertyui.com/';
if(http.startsWith('http://')) {
    console.log('HTTP server started with ' + http);
}

//8

let str = '1-2-3-4-5';

console.log(str.replace('1-2-3-4-5', '1.2.3.4.5'));

//9

const array = [1, 2, 3, 4, 5];

for (let i = 0; i < array.length; i++) {
    if (array[i] === 3) {
        console.log(array[i]);
    }
}