//1

const test = 10;

(test > 10)?console.log("test > 10"):console.log("test < 10");
(test >= 10)?console.log("test >= 10"):console.log("test =< 10");
(test === 10)?console.log("test = 10"):console.log("test != 10");

//2

const test1 = 1;
const test2 = 2;
(test1 > test2)?console.log("test1 > test2"):console.log("test1 < test2");

//3

const num = 15;
(num >= 10 && num <= 20)?console.log("num >= 10 && num <= 20"):"";

//4

const days = 22;
(days <= 11)?console.log("<=11"):"";
(days > 11 && days <= 21)?console.log("11< days <= 21"):"";
(days <= 31&&days>=22)?console.log("<=31"):"";

//5

const month = 3;
(month <= 2 || month === 12) ? console.log("Зима"): "";
(month > 2 && month <= 5) ? console.log("Весна"): "";
(month > 5 && month <= 8) ? console.log("Лето"): "";
(month > 8 && month <= 11) ? console.log("Осень"): "";

//6

const age = prompt("What is your years old");
(age >= 18) ? alert("Open :)"):alert("Lock :(");