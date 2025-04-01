//1

let array = [4 , 9 , 16 , 25 , 36];

const sort_arr = array.map(elem => Math.sqrt(elem));
console.log(sort_arr);

//2

let array = [1 , 2 , 3];
let sum = 0;

array.forEach(elem => sum += Math.pow(elem, 2));

console.log(sum);

//3

let array = [1 , -1 , 2 , -2 , 3 , -3];

let find_arr = array.filter(function(elem){
  if(elem > 0){
    return true
  }
  else{
    return false
  }
});

console.log(find_arr);

//4

let array = [1 , 2 , 3 , 4 , -1];

let findArr = array.every(function(elem){
  if(elem > 0){
    return true
  }
  else{
    return false
  }
})

console.log(findArr);

//5

let array = [-1 , -2 , 3];
let checkArr = array.find(elem => elem > 0);

console.log(checkArr);