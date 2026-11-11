let balance = 1000;
function
Update (message){
    document.getElementById("balance").textContent = balance;
    document.getElementById("message").textContent = message;
}
function getAmount(){
    return Number(document.getElementById("amount").value);
}
function Deposit(){
    const amount = getAmount();
    if(amount <= 0){
        Update("enter a valid amount");
        return;
    }
    balance+=amount;
    Update("Deposit successful");
}
function Withdraw(){
    const amount = getAmount();
    if(amount <= 0){
        Update("enter a valid amount");
        return;
    }
    if(amount>balance){
        Update("insufficient balance");
        return;
    }
    balance -= amount;
    Update("Withdrawal Successful");
}