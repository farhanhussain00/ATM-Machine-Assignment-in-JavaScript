let balance = 20000; // Initial balance

let option = prompt("Welcome to the ATM!\n\n1. Check Balance\n2. Withdraw Money\n3. Deposit Money\n4. Quit");

switch (option) {
    case "1":
        alert("Your balance is: Rs" + balance);
        break;
    case "2":
        let withdrawAmount = parseInt(prompt("Enter amount to withdraw:"));
        if (withdrawAmount <= balance) {
            balance -= withdrawAmount;
            alert("Withdrawal successful. Remaining balance: Rs" + balance);
        } else {
            alert("Insufficient funds.");
        }
        break;
    case "3":
        let depositAmount = parseInt(prompt("Enter amount to deposit:"));
        balance += depositAmount;
        alert("Deposit successful. New balance: Rs" + balance);
        break;
    case "4":
        alert("Thank you for using the ATM. Goodbye!");
        break;
    default:
        alert("Invalid choice. Please try again.");
        break;
}