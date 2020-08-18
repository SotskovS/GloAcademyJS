'use strict';

const isNumber = (n) => {return !isNaN(parseFloat(n)) && isFinite(n);}; 

const isNull = function(s) {
  if (!Boolean(s)) {
    alert('Вы не ввели значение!')
  }; 
};

let money,
    start = () => {
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
  mission: 100000,
  period: 12,
  budget: money,
  budgetDay: 0,
  budgetMonth: 0, 
  expensesMonth: 0,
  asking: function() {
    //Вариант
    // const addExpenses = prompt('Перечислите возможные расходы за рассчитываемый период через запятую');      
    //   do {
    //     addExpenses = prompt('Перечислите возможные расходы за рассчитываемый период через запятую');      
    //   } while (!isNull(addExpenses));

    // Вариант 2
      // const addExpenses = prompt('Перечислите возможные расходы за рассчитываемый период через запятую');      
        // if (!isNull(addExpenses)) {
        //   do {
        //     addExpenses = prompt('Перечислите возможные расходы за рассчитываемый период через запятую');      
        //     } while (!isNull(addExpenses));                    
        // };

    const addExpenses = prompt('Перечислите возможные расходы за рассчитываемый период через запятую');
    appData.addExpenses = addExpenses.toLowerCase().split(', ');
    appData.deposit = confirm('Есть ли у Вас депозит в банке?');
    for (let i = 0; i < 2; i++) {
      function amount() {
        do {
          amount = prompt('Во сколько это обойдется?');
        } while (!isNumber(amount)); 
        return +amount;
      };
    appData.expenses[prompt('Введите обязательную статью расходов?')] = amount();  
    };
  },
  getExpensesMonth: function() {
    let sum = 0;
      for (let key in appData.expenses) {
        sum += appData.expenses[key];
      };
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
  }
};

appData.asking();
appData.getExpensesMonth();
appData.getBudget();
appData.getTargetMonth();
appData.getStatusIncome();

console.log('Расходы за месяц: ', appData.expensesMonth);
console.log('Срок достижения цели: ', appData.getTargetMonth());
console.log('Уровень дохода: ', appData.getStatusIncome());

console.log('Наша программа включает в себя данные: ');
for (let key in appData) {
  console.log(key, appData[key]);
}
