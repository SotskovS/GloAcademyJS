'use strict'

const income = 'Freelance',
  addExpenses = prompt('Перечислите возможные расходы за рассчитываемый период через запятую'),
  period = 12,
  deposit = confirm('Есть ли у Вас депозит в банке?'),
  mission = 100_000;

let money, expenses1, expenses2, amount;

let isNumber = (n) => {return !isNaN(parseFloat(n)) && isFinite(n)}; 

let start = () => {
  do {
    money = prompt('Ваш месячный доход?');
  } while (!isNumber(money));
};

start();

const showTypeOf = data => console.log(data, typeof(data));
const getExpensesMonth = () => {
  let sum = 0;
  
  for (let i = 0; i <2; i++) {
    
    if (i === 0) {
      expenses1 = prompt('Введите обязательную статью расходов?');
    } else if (i === 1) {
      expenses2 = prompt('Введите обязательную статью расходов?');
    }
    
    do {
      amount = prompt('Во сколько это обойдется?');
    } while (!isNumber(amount)) 

    sum += +amount;
  }
  
  return sum;
};

const expensesAmount = getExpensesMonth();
const getAccumulatedMonth = () => money - expensesAmount;
const getTargetMonth = () =>  Math.ceil(mission / accumulatedMonth);
const getStatusIncome = () => {
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
console.log('Расходы за месяц: ', expensesAmount);
console.log(addExpenses.toLowerCase().split(', '));
(getTargetMonth() >= 0) ? console.log(`Срок достижения цели: ${getTargetMonth()} мес.`) :
                          console.log('Цель не будет достигнута!');
console.log('Бюджет на день: ', budgetDay);
console.log(getStatusIncome());
