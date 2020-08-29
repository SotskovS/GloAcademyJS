'use strict';

const isNumber = function(n) {
  return (!isNaN(parseFloat(n)) && isFinite(n)); 
};
let start = document.querySelector('#start'),
  btnPlusIncome = document.getElementsByTagName('button')[0],
  btnPlusExpences = document.getElementsByTagName('button')[1],
  depositeCheck = document.querySelector('#deposit-check'),
  additionalIncomeItem = document.querySelectorAll('.additional_income-item'),
  salaryAmount = document.querySelector('.salary-amount'),
  budgetDayValue = document.querySelector('.budget_day-value'),
  budgetMonthValue = document.querySelector('.budget_month-value'),
  expensesMonthValue = document.querySelector('.expenses_month-value'),
  additionalIncomeValue = document.querySelector('.additional_income-value'),
  additionalExpensesValue = document.querySelector('.additional_expenses-value'),
  incomePeriodValue = document.querySelector('.income_period-value'),
  targetMonthValue = document.querySelector('.target_month-value'),

  incomeItems = document.querySelectorAll('.income-items'),
  expensesItems = document.querySelectorAll('.expenses-items'),
  additionalExpensesItem = document.querySelector('.additional_expenses-item'),
  targetAmount = document.querySelector('.target-amount'),
  periodSelect = document.querySelector('.period-select'),
  periodAmount = document.querySelector('.period-amount'),
  inputs = document.querySelectorAll('input'),
  cancel = document.querySelector('#cancel');
  
start.disabled = true;

salaryAmount.oninput = function() { 
  start.disabled = false;
};

let appData = {
  income: {},
  incomeMonth: 0,
  addIncome: [],
  expenses: {},
  addExpenses: [],
  deposit: false,
  percentDeposit: 0,
  moneyDeposit: 0,  
  budget: 0,
  budgetDay: 0,
  budgetMonth: 0, 
  expensesMonth: 0,
  start: function() {

    appData.budget = +salaryAmount.value;    

    appData.getExpenses();
    appData.getIncome();
    appData.getExpensesMonth();
    appData.getIncomeMonth();
    appData.getAddExpenses();
    appData.getAddIncome();
    appData.getBudget();
    appData.getPeriod();
    appData.showResult();
    appData.reset();
  },
  getBtnStartDisable: function() {

    if (salaryAmount.value === '') {
      start.setAttribute('disabled', true);
    } else {
      start.removeAttribute('disabled');
    }
  },
  reset: function() {

    start.style.display = "none";
    cancel.style.display = "block";
    
    inputs.forEach(function(item) {
      item.setAttribute('disabled', true);
    });    
  }, 
  showResult: function(){
    budgetMonthValue.value = appData.budgetMonth;
    budgetDayValue.value = appData.budgetDay;
    expensesMonthValue.value = appData.expensesMonth;
    additionalExpensesValue.value = appData.addExpenses.join(', ');
    additionalIncomeValue.value = appData.addIncome.join(', ');
    targetMonthValue.value = appData.getTargetMonth();
    incomePeriodValue.value = appData.calcPeriod();
    incomePeriodValue.value = appData.getPeriod();
  }, 
  addExpensesBlock: function() {

    let cloneExpensesItem = expensesItems[0].cloneNode(true);
    cloneExpensesItem.querySelector('.expenses-title').value = '';
    cloneExpensesItem.querySelector('.expenses-amount').value = '';
    expensesItems[0].parentNode.insertBefore(cloneExpensesItem, btnPlusExpences);
    expensesItems = document.querySelectorAll('.expenses-items');
    
    if (expensesItems.length === 3) {
      btnPlusExpences.style.display = 'none';
    }
  },
  addIncomeBlock: function() {

    let cloneIncomeItem = incomeItems[0].cloneNode(true);
    cloneIncomeItem.querySelector('.income-title').value = '';
    cloneIncomeItem.querySelector('.income-amount').value = '';
    incomeItems[0].parentNode.insertBefore(cloneIncomeItem, btnPlusIncome);
    incomeItems = document.querySelectorAll('.income-items');
    

    if (incomeItems.length === 3) {
      btnPlusIncome.style.display = 'none';
    }
  },
  getExpenses: function() {

    expensesItems.forEach(function(item) {
      let itemExpenses = item.querySelector('.expenses-title').value;
      let cashExpenses = item.querySelector('.expenses-amount').value;
    
      if (itemExpenses !== '' && cashExpenses !== '') {
        appData.expenses[itemExpenses] = cashExpenses;
      }
    });
  },
  getIncome: function() {
    
    incomeItems.forEach(function(item) {
      let itemIncome = item.querySelector('.income-title').value;
      let cashIncome = item.querySelector('.income-amount').value;
    
      if (itemIncome !== '' && cashIncome !== '') {
        appData.income[itemIncome] = cashIncome;
      }
    });
  },
  getAddExpenses: function() {
    
    let addExpenses = additionalExpensesItem.value.split(',');    
    addExpenses.forEach(function(item) {
      item = item.trim();
    
      if (item !== '') {
        appData.addExpenses.push(item);
      }
    });
  },
  getAddIncome: function() {
    
    additionalIncomeItem.forEach(function(item) {
      let itemValue = item.value.trim();
    
      if (itemValue !== '') {
        appData.addIncome.push(itemValue);
      }
    });
  },
  asking: function() {

    appData.deposit = confirm('Есть ли у Вас депозит в банке?');

    const expenditure = function() {
      let amount;
      do {
        amount = prompt('Во сколько это обойдется?');
      } while (!isNumber(amount)); 
      return +amount;
    };
  },
  getExpensesMonth: function() {
    let sum = 0;

      for (let key in appData.expenses) {
        sum += +appData.expenses[key];
      }
      
    appData.expensesMonth = sum;           
  },
  getIncomeMonth: function() {
    let sum = 0;

      for (let key in appData.income) {
        sum += +appData.income[key];
      }
      
    appData.incomeMonth = sum;           
  },
  getPeriod: function() {    
    
    periodAmount.textContent = periodSelect.value;
    return periodSelect.value;
  },
  getBudget: function() { 
    appData.budgetMonth = appData.budget + appData.incomeMonth - appData.expensesMonth;
    appData.budgetDay = Math.ceil(appData.budgetMonth / 30);
  },
  getTargetMonth: function() {
    return Math.ceil(targetAmount.value / appData.budgetMonth);
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
  calcPeriod: function() {    
    return appData.budgetMonth * periodSelect.value;
  }
};

document.addEventListener('change', appData.getBtnStartDisable());

start.addEventListener('click', appData.start);
// start.addEventListener('click', start.style.display = "none");

periodSelect.addEventListener('change', appData.getPeriod);
btnPlusExpences.addEventListener('click', appData.addExpensesBlock);
btnPlusIncome.addEventListener('click', appData.addIncomeBlock);
