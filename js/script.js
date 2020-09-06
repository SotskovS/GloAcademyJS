'use strict';

const isNumber = function(n) {
  return (!isNaN(parseFloat(n)) && isFinite(n)); 
};

const start = document.querySelector('#start'),
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
  additionalExpensesItem = document.querySelector('.additional_expenses-item'),
  targetAmount = document.querySelector('.target-amount'),
  periodSelect = document.querySelector('.period-select'),
  periodAmount = document.querySelector('.period-amount'),
  inputs = document.querySelectorAll('input'),
  cancel = document.querySelector('#cancel');

let incomeItems = document.querySelectorAll('.income-items'),
  expensesItems = document.querySelectorAll('.expenses-items'); 
  
const AppData = function() {

  this.income = {};
  this.incomeMonth = 0;
  this.addIncome = [];
  this.expenses = {};
  this.addExpenses = [];
  this.deposit = false;
  this.percentDeposit = 0;
  this.moneyDeposit = 0;  
  this.budget = 0;
  this.budgetDay = 0;
  this.budgetMonth = 0; 
  this.expensesMonth = 0;  
};

AppData.prototype.start = function() {

  this.budget = +salaryAmount.value;   
  
  this.getExpenses();
  this.getIncome();
  this.getExpensesMonth();
  this.getIncomeMonth();
  this.getAddExpenses();
  this.getAddIncome();
  this.getBudget();
  this.getPeriod();
  this.showResult();
  
  start.style.display = "none";
  cancel.style.display = "block";
  
  inputs.forEach(function(item) {
    item.setAttribute('disabled', true);

  });        

  incomeItems.forEach(function(item) {      
    item.querySelector('input').setAttribute('disabled', true);
  });

  expensesItems.forEach(function(item) {      
    item.querySelector('input').setAttribute('disabled', true);
  });

  btnPlusIncome.setAttribute('disabled', true);
  btnPlusExpences.setAttribute('disabled', true);   
};

AppData.prototype.reset = function() {
  
  start.style.display = "block";
  cancel.style.display = "none";

  inputs.forEach(function(item) {      
    item.removeAttribute('disabled');
    item.value = '';
  });

  incomeItems.forEach(function(item, i) {
    switch (i) {
      case 1:
        incomeItems[1].remove();
        break;
      case 2:
        incomeItems[1].remove();
        incomeItems[2].remove();
        break;
      default:
        break;
    }      
  });

  expensesItems.forEach(function(item, i) {
    switch (i) {
      case 1:
        expensesItems[1].remove();
        break;
      case 2:
        expensesItems[1].remove();
        expensesItems[2].remove();
        break;
      default:
        break;
    }      
  });

  btnPlusIncome.style.display = 'block';
  btnPlusExpences.style.display = 'block';

  incomeItems.forEach(function(item) {
    item.querySelector('input').removeAttribute('disabled', true);
    item.querySelector('input').value = '';
  });
  
  expensesItems.forEach(function(item) {
    item.querySelector('input').removeAttribute('disabled', true);
    item.querySelector('input').value = '';
  });

  btnPlusIncome.removeAttribute('disabled');
  btnPlusExpences.removeAttribute('disabled');
  periodSelect.value = 1;
  periodAmount.textContent = "1";

  this.income = {};
  this.incomeMonth = 0;
  this.addIncome = [];
  this.expenses = {};
  this.addExpenses = [];
  this.deposit = false;
  this.percentDeposit = 0;
  this.moneyDeposit = 0;  
  this.budget = 0;
  this.budgetDay = 0;
  this.budgetMonth = 0; 
  this.expensesMonth = 0;
  this.budgetDayValue = 0;
  this.budgetMonthValue = 0;
  this.incomePeriodValue = 0;

  start.disabled = true;
};

AppData.prototype.showResult = function(){

  budgetMonthValue.value = this.budgetMonth;
  budgetDayValue.value = this.budgetDay;
  expensesMonthValue.value = this.expensesMonth;
  additionalExpensesValue.value = this.addExpenses.join(', ');
  additionalIncomeValue.value = this.addIncome.join(', ');
  targetMonthValue.value = this.getTargetMonth();
  incomePeriodValue.value = this.calcPeriod();
  incomePeriodValue.value = this.getPeriod();
};

AppData.prototype.addExpensesBlock = function() {

  const cloneExpensesItem = expensesItems[0].cloneNode(true);
  cloneExpensesItem.querySelector('.expenses-title').value = '';
  cloneExpensesItem.querySelector('.expenses-amount').value = '';
  expensesItems[0].parentNode.insertBefore(cloneExpensesItem, btnPlusExpences);
  expensesItems = document.querySelectorAll('.expenses-items');
  
  if (expensesItems.length === 3) {
    btnPlusExpences.style.display = 'none';
  }
};

AppData.prototype.addIncomeBlock = function() {

  const cloneIncomeItem = incomeItems[0].cloneNode(true);
  cloneIncomeItem.querySelector('.income-title').value = '';
  cloneIncomeItem.querySelector('.income-amount').value = '';
  incomeItems[0].parentNode.insertBefore(cloneIncomeItem, btnPlusIncome);
  incomeItems = document.querySelectorAll('.income-items');
  
  if (incomeItems.length === 3) {
    btnPlusIncome.style.display = 'none';
  }
};

AppData.prototype.getExpenses = function() {

  expensesItems.forEach((item) => {
    const itemExpenses = item.querySelector('.expenses-title').value;
    const cashExpenses = item.querySelector('.expenses-amount').value;
  
    if (itemExpenses !== '' && cashExpenses !== '') {      
      this.expenses[itemExpenses] = cashExpenses;
    }
  });
};

AppData.prototype.getIncome = function() {

  incomeItems.forEach((item) => {
    const itemIncome = item.querySelector('.income-title').value;
    const cashIncome = item.querySelector('.income-amount').value;
  
    if (itemIncome !== '' && cashIncome !== '') {
      this.income[itemIncome] = cashIncome;
    }
  });
};

AppData.prototype.getAddExpenses = function() {

  let addExpenses = additionalExpensesItem.value.split(',');    
  addExpenses.forEach((item) => {
    item = item.trim();
  
    if (item !== '') {
      this.addExpenses.push(item);
    }
  });
};

AppData.prototype.getAddIncome = function() {

  additionalIncomeItem.forEach((item) => {
    let itemValue = item.value.trim();
  
    if (itemValue !== '') {
      this.addIncome.push(itemValue);
    }
  });
};

AppData.prototype.asking = function() {

  this.deposit = confirm('Есть ли у Вас депозит в банке?');

  const expenditure = function() {
    let amount;
    do {
      amount = prompt('Во сколько это обойдется?');
    } while (!isNumber(amount)); 
    return +amount;
  };
};

AppData.prototype.getExpensesMonth = function() {
  let sum = 0;
    
    for (let key in this.expenses) {
      sum += +this.expenses[key];
    }
    
  this.expensesMonth = sum;           
};

AppData.prototype.getIncomeMonth = function() {
  let sum = 0;
    
    for (let key in this.income) {
      sum += +this.income[key];
    }
    
  this.incomeMonth = sum;           
};

AppData.prototype.getPeriod = function() {    
  
  periodAmount.textContent = periodSelect.value;
  return periodSelect.value;
};

AppData.prototype.getBudget = function() { 
  this.budgetMonth = this.budget + this.incomeMonth - this.expensesMonth;
  this.budgetDay = Math.ceil(this.budgetMonth / 30);
};

AppData.prototype.getTargetMonth = function() {
  return Math.ceil(targetAmount.value / this.budgetMonth);
};

AppData.prototype.getStatusIncome = function() {

  if (this.budgetDay >= 1200) {
    return 'У вас высокий уровень дохода';  
  } else if (this.budgetDay < 1200 && this.budgetDay >= 600) {
    return 'У вас средний уровень дохода';
  } else if (this.budgetDay < 600 && this.budgetDay >= 0) {
    return 'У сожалению у вас уровень дохода ниже среднего';
  } else if (this.budgetDay < 0) {
    return 'Что-то пошло не так';
  }  
};

AppData.prototype.calcPeriod = function() {    
  return this.budgetMonth * periodSelect.value;
};

AppData.prototype.eventListener = function() {

  start.disabled = true;

  salaryAmount.oninput = function() { 
    
    let money = salaryAmount.value.trim();

    if (isNumber(money)) {
      start.disabled = false;
    }    
  };

  start.addEventListener('click', this.start.bind(this));
  cancel.addEventListener('click', appData.reset.bind(appData));

  periodSelect.addEventListener('change', appData.getPeriod);
  btnPlusExpences.addEventListener('click', appData.addExpensesBlock);
  btnPlusIncome.addEventListener('click', appData.addIncomeBlock);
};

const appData = new AppData();

appData.eventListener();
