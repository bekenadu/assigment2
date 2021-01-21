function Deposit(amount,balan) {
    console.log("your current balance"+(balan + amount));

}
function withdrawal(amount,balan) { 
    if (balan<100){
        console.log("you have reached the minimum for withdawal request")
    }
    else if(balan>=100){
        console.log("your remanin balance is" + (balan - amount));}
    else if (amount>5000){
        console.log("cant withdarl all that in one withdrawal");
    }
}
function balance(balan) {
    console.log(balan);

}
function Transfer(amount,balan){
    let x=(balan-amount);
    if(x>0){
        console.log("your Transfer was succecful your remanin balance"+ x);
    }
    else{
        console.log("insufficent Balance")
    }


}
function loan(amount,balan){
    var  v = balan *10
    if (amount<=v){
        console.log("loan granted now your current balance will be"+ (amount+balan));
    }
    else{
        console.log("too high with current balance loan deniyed");
    }

}
(function () {
    let x = eval(prompt("Choose an operation\n 1 for deposite \n 2 for withdrawal \n 3 for Transer \n 4 for Balance \n 5 for Loan" ));
    
    var balan = 250;
    if (x==1 | x==2 |x==3 |x==5){
        let amount = eval(prompt("Enter the Amount"));
        if (x == 1) {
            Deposit(amount,balan);
                    }
        else if (x == 2) {
            withdrawal(amount,balan);
            }
        else if (x == 3) {
            Transfer(amount,balan);
        }
        else if (x == 5){
            loan(amount,balan);
        }
    }
    else if(x==4){
        balance(balan);
    }
})()
