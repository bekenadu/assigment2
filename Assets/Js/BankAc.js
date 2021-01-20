function Deposit(amount,balan) {
    console.log("your current balance"+(balan + amount));

}
function withdrawal(amount,balan) { 
    if (balan<100){
        console.log("you have reached the minimum for withdawal request")
    }
    else if(balan>=100){
        console.log("your remanin balance is" + (balan - amount));}
}
function balance(balan) {
    console.log(balan);

}
function Transfer(amount,balan){
    let x=(balan-amount);
    if(x>0){
        console.log("your remanin balance"+ x);
    }
    else{
        console.log("insufficent Balance")
    }


}

(function () {
    let x = eval(prompt("Choose an operation\n 1 for deposite \n 2 for withdrawal \n 3 for Transer \n 4 for Balance"));
    
    var balan = 250;
    if (x==1 | x==2){
        let amount = eval(prompt("Enter the Amount"));
        if (x == 1) {
            Deposit(amount,balan);
                    }
        else if (x == 2) {
            withdrawal(amount,balan);
            }
        else if (x == 3) {
            Transfer(amount,balan);
        }}
    else if(x==4){
        balance();
    }
})()
