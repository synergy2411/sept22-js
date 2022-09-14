class Expenses {
    url = "http://localhost:3030/expenses";
    container = null;
    constructor() {
        this.container = document.querySelector("#expense-container")
        console.log(this.container);
    }

    fetchExpenses() {
        console.log("FETCHING");
        fetch(this.url)
            .then(response => response.json())
            .then(expenses => {
                console.log(expenses);
                this.container.innerHTML = '';
                expenses.forEach(expense => {
                    const li = document.createElement("li")
                    li.innerHTML = `
                    <p class='lead'>
                        ${expense.title.toUpperCase()} - $${expense.amount}
                        <span class='float-end'>
                            <button class='btn btn-danger btn-sm'>DELETE</button>
                        </span>
                    </p>
                    
                    `
                    li.classList.add("list-group-item")
                    this.container.appendChild(li)
                });
            })
            .catch(console.error)
    }

    createExpense(title, amount) {
        fetch(this.url, {
            method: "POST",
            body: JSON.stringify({ title, amount }),
            headers: {
                "Content-Type": "application/json"
            }
        }).then(response => response.json())
            .then(result => {
                this.fetchExpenses();
            }).catch(console.error)

    }
}

export default Expenses;