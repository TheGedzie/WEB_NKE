const array = [1, 2, 3];
//1
alert(array);
console.log(array);

//2
const Console = array.map(function (num){
    console.log(num);
})

//3
console.log(array.length);

//4
console.log(array.at(-1));

//5
const Consoles = array.map(function (num){
    console.log(num+=3)
})

//6
array.push(1,2,3);
console.log(array);
