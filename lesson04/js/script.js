'use strict'

const money = +prompt('Ваш месячный доход?', 50000),
  income = 'Freelance',
  addExpenses = prompt('Перечислите возможные расходы за рассчитываемый период через запятую'),
  period = 12,
  deposit = confirm('Есть ли у Вас депозит в банке?'),
  mission = 100_000,
  expenses1 = prompt('Введите обязательную статью расходов?'),
  amount1 = +prompt('Во сколько это обойдется?'),
  expenses2 = prompt('Введите обязательную статью расходов?'),
  amount2 = +prompt('Во сколько это обойдется?');
  
let showTypeOf = data => console.log(data, typeof(data));
let getExpensesMonth = () => amount1 + amount2;
let getAccumulatedMonth = () => money - getExpensesMonth();
let getTargetMonth = () =>  Math.ceil(mission / accumulatedMonth)
let getStatusIncome = () => {
  if (budgetDay >= 1200) {
    return 'У вас высокий уровень дохода';  
  } else if (budgetDay < 1200 && budgetDay >= 600) {
    return 'У вас средний уровень дохода';
  } else if (budgetDay < 600 && budgetDay >= 0) {
    return 'У сожалению у вас уровень дохода ниже среднего';
  } else if (budgetDay < 0) {
    return 'Что-то пошло не так';
  }  
};

const accumulatedMonth = getAccumulatedMonth();  
const budgetDay = accumulatedMonth / 30;  

showTypeOf(money);
showTypeOf(income);
showTypeOf(deposit);
console.log('Расходы за месяц: ', getExpensesMonth());
console.log(addExpenses.toLowerCase().split(', '));
console.log('Срок достижения цели: ', getTargetMonth());
console.log('Бюджет на день: ', budgetDay);
console.log(getStatusIncome());
