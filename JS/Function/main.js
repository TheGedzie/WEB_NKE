//1

function sayHello(myName) {
    return "My name is " + myName;
}
console.log(sayHello('Dmitry'));

//2

function checkNumber(number) {
    if(number > 0){
        return '+++';
    }
    else {
        return '---';
    }
}
console.log(checkNumber(10));

//3

function sumNumber(a,b,c) {
    return a + b + c;
}
console.log(sumNumber(1,2,3));

//4

function sqrtNumber(number) {
    return Math.sqrt(number);
}
const sqrt3 = sqrtNumber(3);
const sqrt4 = sqrtNumber(4);
console.log(sqrt3 + sqrt4);

//5

function checkArray(array) {
    for(let i = 0; i < array.length; i++) {
        if (array[i] % 2 !== 0) {
            return "Есть нечетные числа";
        }
    }
    return "Все числа четные";
}

console.log(checkArray([3,4,6,8]));

//6

function delNumber(number) {
    let count = 0;
    while (number > 10) {
        number /= 2;
        count++;
    }
    return count;
}
console.log(delNumber(100));