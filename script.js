let balance = 1000; 
const correctPIN = "1234"; 

document.getElementById("loginBtn").addEventListener("click", function() {
    let pin = document.getElementById("pin").value;
    if (pin === correctPIN) {
        document.getElementById("login").style.display = "none";
        document.getElementById("atmSection").style.display = "block";
    } else {
        alert("❌ Incorrect PIN!");
    }
});

document.getElementById("atmOptions").addEventListener("change", function() {
    let choice = this.value;
    let message = document.getElementById("message");
    let amountSection = document.getElementById("amountSection");

    if (choice === "withdraw") {
        document.body.style.backgroundColor = "#ffcccc";
        message.style.color = "red";
        message.textContent = "💸 Withdraw: Enter amount to withdraw.";
        amountSection.style.display = "block";
    } 
    else if (choice === "deposit") {
        document.body.style.backgroundColor = "#ccffcc";
        message.style.color = "green";
        message.textContent = "💰 Deposit: Enter amount to deposit.";
        amountSection.style.display = "block";
    } 
    else if (choice === "balance") {
        document.body.style.backgroundColor = "#ccccff";
        message.style.color = "blue";
        message.textContent = "📊 Balance: Your current balance is " + balance;
        amountSection.style.display = "none";
    } 
    else {
        document.body.style.backgroundColor = "white";
        message.style.color = "black";
        message.textContent = "Please select an option from above.";
        amountSection.style.display = "none";
    }
});

document.getElementById("confirmBtn").addEventListener("click", function() {
    let choice = document.getElementById("atmOptions").value;
    let amount = Number(document.getElementById("amount").value);
    let message = document.getElementById("message");

    if (choice === "withdraw") {
        if (amount > 0 && amount <= balance) {
            balance -= amount;
            message.textContent = "Withdraw successful! New balance: " + balance;
        } else {
            message.textContent = "❌ Invalid amount or insufficient funds.";
        }
    } 
    else if (choice === "deposit") {
        if (amount > 0) {
            balance += amount;
            message.textContent = "✅ Deposit successful! New balance: " + balance;
        } else {
            message.textContent = "❌ Invalid amount.";
        }
    }
    document.getElementById("amount").value = "";
});