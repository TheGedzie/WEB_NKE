//1

let arr = [
    ['a', 'b', 'c'],
    ['d', 'e', 'f'],
    ['g', 'h', 'i'],
    ['j', 'k', 'l'],
];

console.log(arr[3][2] + " " + arr[1][1] + " " + arr[2][0] + " " + arr[0][0]);

//2

let arr = [
    [1, 2, 3],
    [4, 5],
    [6]
];

let sum = 0;

for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
        sum += arr[i][j];
    }
}
console.log(sum);

//3

let students = {
    'group1': ['name11', 'name12', 'name13'],
    'group2': ['name21', 'name22', 'name23'],
    'group3': ['name31', 'name32', 'name33'],
};

console.log(students["group3"][0]);

//4

let employees = [
    { name: 'name1', salary: 300, },
    { name: 'name2', salary: 400, },
    { name: 'name3', salary: 500, }, ];

for (let i = 0; i < employees.length; i++) {
    console.log(employees[i].name + ' : ' + employees[i].salary);
}
