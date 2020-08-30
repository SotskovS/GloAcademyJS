'use strict';

const AppData = function(){
  this.stop();
};

AppData.prototype.start = function() {
  console.log('start');
};

AppData.prototype.stop = function() {
  console.log('stop');
};

const appData = new AppData();

console.log(appData);

appData.start();






// // const isNumber = function(n) {
// //   return (!isNaN(parseFloat(n)) && isFinite(n)); 
// // };

// let start = document.querySelector('#start'),
//   // btnPlusIncome = document.getElementsByTagName('button')[0],
//   // btnPlusExpences = document.getElementsByTagName('button')[1],
//   // depositeCheck = document.querySelector('#deposit-check'),
//   // additionalIncomeItem = document.querySelectorAll('.additional_income-item'),
//   // salaryAmount = document.querySelector('.salary-amount'),
//   // budgetDayValue = document.querySelector('.budget_day-value'),
//   // budgetMonthValue = document.querySelector('.budget_month-value'),
//   // expensesMonthValue = document.querySelector('.expenses_month-value'),
//   // additionalIncomeValue = document.querySelector('.additional_income-value'),
//   // additionalExpensesValue = document.querySelector('.additional_expenses-value'),
//   // incomePeriodValue = document.querySelector('.income_period-value'),
//   // targetMonthValue = document.querySelector('.target_month-value'),
  
//   // incomeItems = document.querySelectorAll('.income-items'),
//   // expensesItems = document.querySelectorAll('.expenses-items'),
//   // additionalExpensesItem = document.querySelector('.additional_expenses-item'),
//   // targetAmount = document.querySelector('.target-amount'),
//   // periodSelect = document.querySelector('.period-select'),
//   // periodAmount = document.querySelector('.period-amount'),
//   // inputs = document.querySelectorAll('input'),
//   // cancel = document.querySelector('#cancel');
  
  
//   const AppData = function() {
    
//     // this.income = {};
//     // this.incomeMonth = 0;
//     // this.addIncome = [];
//     // this.expenses = {};
//     // this.addExpenses = [];  
//     // this.deposit = false;
//     // this.percentDeposit = 0;
//     // this.moneyDeposit = 0;  
//     // this.budget = 0;
//     // this.budgetDay = 0;
//     // this.budgetMonth = 0; 
//     // this.expensesMonth = 0;
//   };
  
//   const appData = new AppData();
  
// console.log(appData);

// // AppData.prototype.getBtnStartDisable = function() {
// //   if (salaryAmount.value === '') {
// //     start.setAttribute('disabled', true);
// //   } else {
// //     start.removeAttribute('disabled');
// //   }
// // };

// AppData.prototype.start = function() {
  
//   // start.disabled = true;
    
//   // salaryAmount.oninput = function() { 
//   //   start.disabled = false;
//   // };
  
//   // this.budget = +salaryAmount.value;    
  
// console.log('hkjshfksdjh');

//   //  this.getExpenses();
  
//   // this.getIncome;
  
//   // this.getExpensesMonth;
  
//   // this.getIncomeMonth;
//   // this.getAddExpenses;
//   // this.getAddIncome;
//   // this.getBudget;
//   // this.getPeriod;
//   // this.showResult;
//   // // this.reset();
// };
// // console.log(appData);

// // console.log(AppData.prototype.start);
// // AppData.prototype.start();

// // AppData.prototype.reset = function() {
  
// //   start.style.display = "none";
// //   cancel.style.display = "block";
  
// //   inputs.forEach(function(item) {
// //     item.setAttribute('disabled', true);
// //   });    
// // }; 
// // AppData.prototype.showResult = function(){
// //   budgetMonthValue.value = this.budgetMonth;
// //   budgetDayValue.value = this.budgetDay;
// //   expensesMonthValue.value = this.expensesMonth;
// //   additionalExpensesValue.value = this.addExpenses.join(', ');
// //   additionalIncomeValue.value = this.addIncome.join(', ');
// //   targetMonthValue.value = this.getTargetMonth();
// //   incomePeriodValue.value = this.calcPeriod();
// //   incomePeriodValue.value = this.getPeriod();
// // }; 
// // AppData.prototype.addExpensesBlock = function() {
  
// //   let cloneExpensesItem = expensesItems[0].cloneNode(true);
// //   cloneExpensesItem.querySelector('.expenses-title').value = '';
// //   cloneExpensesItem.querySelector('.expenses-amount').value = '';
// //   expensesItems[0].parentNode.insertBefore(cloneExpensesItem, btnPlusExpences);
// //   expensesItems = document.querySelectorAll('.expenses-items');
  
// //   if (expensesItems.length === 3) {
// //     btnPlusExpences.style.display = 'none';
// //   }
// // };
// // AppData.prototype.addIncomeBlock = function() {
  
// //   let cloneIncomeItem = incomeItems[0].cloneNode(true);
// //   cloneIncomeItem.querySelector('.income-title').value = '';
// //   cloneIncomeItem.querySelector('.income-amount').value = '';
// //   incomeItems[0].parentNode.insertBefore(cloneIncomeItem, btnPlusIncome);
// //   incomeItems = document.querySelectorAll('.income-items');
  
  
// //   if (incomeItems.length === 3) {
// //     btnPlusIncome.style.display = 'none';
// //   }
// // };
// // AppData.prototype.getExpenses = function() {
// //   const _this = this;
// //   expensesItems.forEach(function(item) {
// //     let itemExpenses = item.querySelector('.expenses-title').value;
// //     let cashExpenses = item.querySelector('.expenses-amount').value;
    
// //     if (itemExpenses !== '' && cashExpenses !== '') {
// //       _this.expenses[itemExpenses] = cashExpenses;
// //     }
// //   });
// // };
// // AppData.prototype.getIncome = function() {
// //   const _this = this;
// //   incomeItems.forEach(function(item) {
// //     let itemIncome = item.querySelector('.income-title').value;
// //     let cashIncome = item.querySelector('.income-amount').value;
    
// //     if (itemIncome !== '' && cashIncome !== '') {
// //       _this.income[itemIncome] = cashIncome;
// //     }
// //   });
// // };
// // AppData.prototype.getAddExpenses = function() {
// //   const _this = this;
// //   let addExpenses = additionalExpensesItem.value.split(',');    
// //   addExpenses.forEach(function(item) {
// //     item = item.trim();
    
// //     if (item !== '') {
// //       _this.addExpenses.push(item);
// //     }
// //   });
// // };
// // AppData.prototype.getAddIncome = function() {
// //   const _this = this;
// //   additionalIncomeItem.forEach(function(item) {
// //     let itemValue = item.value.trim();
    
// //     if (itemValue !== '') {
// //       _this.addIncome.push(itemValue);
// //     }
// //   });
// // };
// // AppData.prototype.asking = function() {
  
// //   this.deposit = confirm('Есть ли у Вас депозит в банке?');
  
// //   const expenditure = function() {
// //     let amount;
// //     do {
// //       amount = prompt('Во сколько это обойдется?');
// //     } while (!isNumber(amount)); 
// //     return +amount;
// //   };
// // };

// // AppData.prototype.getExpensesMonth = function() {
// //   const _this = this;
// //   let sum = 0;  
  
// //   for (let key in _this.expenses) {
// //     sum += +_this.expenses[key];
// //   }
  
// //   _this.expensesMonth = sum;           
// // };

// // AppData.prototype.getIncomeMonth = function() {
// //   const _this = this;
// //   let sum = 0;
  
// //   for (let key in _this.income) {
// //     sum += +_this.income[key];
// //   }
  
// //   _this.incomeMonth = sum;           
// // };

// // AppData.prototype.getPeriod = function() {    
  
// //   periodAmount.textContent = periodSelect.value;
// //   return periodSelect.value;
// // };

// // AppData.prototype.getBudget = function() { 
// //   this.budgetMonth = this.budget + this.incomeMonth - this.expensesMonth;
// //   this.budgetDay = Math.ceil(this.budgetMonth / 30);
// // };

// // AppData.prototype.getTargetMonth = function() {
// //   return Math.ceil(targetAmount.value / this.budgetMonth);
// // };

// // AppData.prototype.getStatusIncome = function() {
// //   if (this.budgetDay >= 1200) {
// //     return 'У вас высокий уровень дохода';  
// //   } else if (this.budgetDay < 1200 && this.budgetDay >= 600) {
// //     return 'У вас средний уровень дохода';
// //   } else if (this.budgetDay < 600 && this.budgetDay >= 0) {
// //     return 'У сожалению у вас уровень дохода ниже среднего';
// //   } else if (this.budgetDay < 0) {
// //     return 'Что-то пошло не так';
// //   }  
// // };
// // AppData.prototype.getInfoDeposit = function() {
// //   const _this = this;
// //   if (this.deposit) {
// //     do {
// //       _this.percentDeposit = prompt('Какой годовой процент?');
// //     } while (!isNumber(this.percentDeposit));
// //     do {
// //       _this.moneyDeposit = prompt('Какая сумма заложена?');
// //     } while (!isNumber(this.moneyDeposit));
// //   }
  
// // };
// // AppData.prototype.calcPeriod = function() {    
// //   return this.budgetMonth * periodSelect.value;
// // };
    
    
// // console.log(appData);


//   start.addEventListener('click', AppData.start.bind(AppData));
    
//     // document.addEventListener('change', appData.getBtnStartDisable());
    
//     // periodSelect.addEventListener('change', appData.getPeriod);
//     // btnPlusExpences.addEventListener('click', appData.addExpensesBlock);
//     // btnPlusIncome.addEventListener('click', appData.addIncomeBlock);
    