const money = +prompt('Ваш месячный доход?'),
  income = 'Freelance',
  addExpenses = prompt('Перечислите возможные расходы за рассчитываемый период через запятую'),
  period = 12,
  deposit = confirm('Есть ли у Вас депозит в банке?'),
  mission = 100_000,
  expenses1 = prompt('Введите обязательную статью расходов?'),
  amount1 = +prompt('Во сколько это обойдется?'),
  expenses2 = prompt('Введите обязательную статью расходов?'),
  amount2 = +prompt('Во сколько это обойдется?'),
  budgetMonth = money - (amount1 + amount2),
  budgetDay = budgetMonth / 30;
  
console.log('money:', typeof money, ' income:', typeof income, ' deposit:', typeof deposit);

console.log('addExpenses length: ', addExpenses.length);
console.log(`Период равен ${period} месяцев`);
console.log(`Цель заработать ${mission} рублей`);
  
console.log(addExpenses.toLowerCase().split(', '));
console.log(budgetDay);
  
console.log('budgetMonth: ', budgetMonth);
console.log(`Цель будет достигнута через: ' ${Math.ceil(mission / budgetMonth)} ' мес.'`);

if (budgetDay > 1200) {
  console.log('У вас высокий уровень дохода');  
} else if (budgetDay < 1200 && budgetDay >= 600) {
  console.log('У вас средний уровень дохода');
} else if (budgetDay < 600 && budgetDay > 0) {
  console.log('У сожалению у вас уровень дохода ниже среднего');
} else if (budgetDay < 0) {
  console.log('Что-то пошло не так');
};
