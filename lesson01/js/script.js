const money = 50_000,
  income = 'Freelance',
  addExpenses = 'Интернет, Такси, Коммуналка',
  deposit = true,
  mission = 800_000,
  period = 12,
  budgetDay = money / 30;

console.log('money:', typeof money, ' income:', typeof income, ' deposit:', typeof deposit);

console.log('addExpenses length: ', addExpenses.length);
console.log(`Период равен ${period} месяцев`);
console.log(`Цель заработать ${mission} рублей`);

console.log(addExpenses.toLowerCase().split(', '));
console.log(budgetDay);
