'use strict';

const isNumber = n => !isNaN(parseFloat(n)) && isFinite(n); 

let money;
const start = function() {
  do {
    money = prompt('Ваш месячный доход?');
  } while (!isNumber(money));
};

start();

let appData = {
  income: {},
  addIncome: {},
  expenses: {},
  addExpenses: [],
  deposit: false,
  percentDeposit: 0,
  moneyDeposit: 0,
  mission: 100000,
  period: 12,
  budget: money,
  budgetDay: 0,
  budgetMonth: 0, 
  expensesMonth: 0,
  asking: function() {

    if(confirm('Есть ли у вас дополнительный источник заработка?')) {
      let itemIncome, cashIncome;
      do {
        itemIncome = prompt('Какой у вас дополнительный заработок?');
      } while(!Boolean(itemIncome.trim()) || isNumber(itemIncome));

      do {
        cashIncome = prompt('Сколько в месяц на этом зарабатываете?');
      } while(!isNumber(cashIncome));

      appData.income[itemIncome] = cashIncome;
    }

    let addExp;
    do {
      addExp = prompt('Перечислите возможные расходы за рассчитываемый период через запятую');      
    } while (!Boolean(addExp.trim()) || isNumber(addExp));
    appData.addExpenses = addExp.toLowerCase().split(', ');
    appData.deposit = confirm('Есть ли у Вас депозит в банке?');

    const expenditure = function() {
      let amount;
      do {
        amount = prompt('Во сколько это обойдется?');
      } while (!isNumber(amount)); 
      return +amount;
    };

    for (let i = 0; i < 2; i++) {
      do {
        addExp = prompt('Введите обязательную статью расходов?');      
      } while(!Boolean(addExp.trim()) || isNumber(addExp));
      appData.expenses[addExp] = expenditure() ;  
    }
  },
  getExpensesMonth: function() {
    let sum = 0;

      for (let key in appData.expenses) {
        sum += appData.expenses[key];
      }
      
    appData.expensesMonth = sum;       
  },
  getBudget: function() { 
    appData.budgetMonth = appData.budget - appData.expensesMonth;
    appData.budgetDay = appData.budgetMonth / 30;
  },
  getTargetMonth: function() {
    return Math.ceil(appData.mission / appData.budgetMonth);
  },
  getStatusIncome: function() {
    if (appData.budgetDay >= 1200) {
      return 'У вас высокий уровень дохода';  
    } else if (appData.budgetDay < 1200 && appData.budgetDay >= 600) {
      return 'У вас средний уровень дохода';
    } else if (appData.budgetDay < 600 && appData.budgetDay >= 0) {
      return 'У сожалению у вас уровень дохода ниже среднего';
    } else if (appData.budgetDay < 0) {
      return 'Что-то пошло не так';
    }  
  },
  getInfoDeposit: function() {

    if (appData.deposit) {
      do {
        appData.percentDeposit = prompt('Какой годовой процент?');
      } while (!isNumber(appData.percentDeposit));
      do {
        appData.moneyDeposit = prompt('Какая сумма заложена?');
      } while (!isNumber(appData.moneyDeposit));
    }
    
  },
  calcSavedMoney: function() {
    return appData.budgetMonth * appData.period;
  }
};

appData.asking();
appData.getExpensesMonth();
appData.getBudget();
appData.getTargetMonth();
appData.getStatusIncome();
appData.getInfoDeposit();

console.log('Расходы за месяц: ', appData.expensesMonth);
console.log('Срок достижения цели: ', appData.getTargetMonth());
console.log('Уровень дохода: ', appData.getStatusIncome());

const upperCase = appData.addExpenses.map(function(item) {
  return item[0].toUpperCase() + item.slice(1);
});

console.log(upperCase.join(', '));
