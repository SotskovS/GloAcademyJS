let money = 50_000;
let income = 'Freelance'; 
let addExpenses = 'Интернет, Такси, Коммуналка';
let deposit = true;
let mission = 800_000;
let period = 12;
let budgetDay = money / 30;

console.log('money: ', typeof money);
console.log('income: ', typeof income);
console.log('deposit: ', typeof deposit);
console.log('addExpenses length: ', addExpenses.length);
console.log(`Период равен ${period} месяцев`);
console.log(`Цель заработать ${mission} рублей`);

let expensesArray = addExpenses.toLowerCase().split(', ');
console.log(expensesArray);
