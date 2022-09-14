import Expenses from './model/expenses';

window.onload = function () {
    const ulContainer = document.querySelector("#expense-container")
    const amountEl = document.querySelector("#txtAmount")
    const titleEl = document.querySelector("#txtTitle")
    const btnAddExpense = document.querySelector("#btnAddExpense")

    let expObj = new Expenses();

    expObj.fetchExpenses();


    btnAddExpense.addEventListener("click", function (event) {
        event.preventDefault();
        expObj.createExpense(titleEl.value, amountEl.value)
    })


}