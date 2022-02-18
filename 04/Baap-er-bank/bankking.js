
function byId(idCall){
    const id = document.getElementById(idCall);
    return id;
}

function inputValue(idCall){
    const input = byId(idCall);
    var inputValue = input.value;
    input.value = "";
    const number = parseFloat(inputValue);
    return number;
}

function totalBalance(idCall, currentValue, isAdd){
    const current = byId(idCall);
    const textToNumber = current.innerText;
    if(isAdd == true){
        const newValue = parseFloat(textToNumber) + currentValue;
        current.innerText = newValue;
        return newValue;
    }
    else{
        const newValue = parseFloat(textToNumber) - currentValue;
        current.innerText = newValue;
        return newValue;
    }
}

byId('deposit-button').addEventListener('click', function(){
    const deposit = inputValue('deposit-input');
    console.log(deposit);
    if(deposit > 0){
        totalBalance('deposit-total', deposit, true);
        totalBalance('balance-total', deposit, true);
    }
});

byId('withdraw-button').addEventListener('click', function(){
    const withdraw = inputValue('withdraw-input');
    //const balance = byId("balance-total");
    var currentBalance = parseFloat(byId("balance-total").innerText);
    console.log(currentBalance);
    console.log(withdraw);
    if(withdraw > 0 && currentBalance >= withdraw){
        totalBalance('withdraw-total', withdraw, true);
        totalBalance('balance-total', withdraw, false);
    } 
});

