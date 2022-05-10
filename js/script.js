// Задание 1
alert('Привет, это работа Жук Антонины');
// Задание 2
let planetName;
planetName = 'Юпитер';
console.log(planetName);
let myAge;
myAge = 25;
console.log(myAge);
let brokenCar = 'AUDI';
console.log(brokenCar);
const COLOR_HEADER = "#FFF";
console.log(COLOR_HEADER);
let isAdmin = confirm('Ты администратор?');
console.log(isAdmin);
// Задание 3
let myName = 'Антонина';
let mySurName = 'Жук';
console.log(`Привет! Меня зовут ${myName} ${mySurName}. Мне ${myAge} лет`);
// Задание 4
let nameInspector;
nameInspector = prompt('Как тебя зовут?', 'Имя');
console.log(`Мою работу проверяет ${nameInspector}`);
// Задание 5
str = "String";
num = 2000;
testSkiped = false;
month = undefined;
data = null;
console.log(typeof(str), typeof(num), typeof(testSkiped), typeof(month), typeof(data));
// Задание 6
let newStr;
newStr = "37";
newStr = String(newStr);
console.log(newStr, typeof(newStr));
newStr = Boolean(newStr);
console.log(newStr, typeof(newStr));
let newValue = true;
newValue = String(newValue);
console.log(newValue, typeof(newValue));
newValue = Number(newStr);
console.log(newValue, typeof(newValue));
let newNum = 2007;
newNum = String(newNum);
console.log(newNum, typeof(newNum));
newNum = Boolean(newNum);
console.log(newNum, typeof(newNum));
// Задание 7
let name = 'Ivan';
let surname = name;
console.log(surname);