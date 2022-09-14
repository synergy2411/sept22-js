window.onload = function () {
    const ulContainer = document.querySelector("#expense-container")
    const amountEl = document.querySelector("#txtAmount")
    const titleEl = document.querySelector("#txtTitle")
    const btnAddExpense = document.querySelector("#btnAddExpense")

    const url = "http://localhost:3030/expenses";

    const fetchExpenses = () => {
        fetch(url)
            .then(response => response.json())
            .then(expenses => {
                expenses.forEach(expense => {
                    const li = document.createElement("li")
                    li.innerHTML = `
                    <h6>${expense.title.toUpperCase()} <span class='fluid-right'>$${expense.amount}</span> </h6>
                    <button class='btn btn-danger btn-sm'>DELETE</button>
                    `
                    li.classList.add("list-group-item")
                    ulContainer.appendChild(li)
                });
            })
            .catch(console.error)
    }

    const createExpense = (title, amount) => {
        fetch(url, {
            method: "POST",
            body: JSON.stringify({ title, amount }),
            headers: {
                "Content-Type": "application/json"
            }
        }).then(response => response.json())
            .then(result => {
                ulContainer.innerHTML = '';
                fetchExpenses();
            }).catch(console.error)

    }
    btnAddExpense.addEventListener("click", function (event) {
        event.preventDefault();
        createExpense(titleEl.value, amountEl.value)
    })



    fetchExpenses()

}