//-------------handle deposit button event
document.getElementById('deposit-button').addEventListener('click', function(){
    //console.log('clicke')
    //--------- Get the amount deposited
const depositInput = document.getElementById('deposit-input');
console.log(depositInput.value);
//console.log(depositInput.value);
const depositAmount = depositInput.value;
//console.log(depositAmount);

//--------Deposit add
const depositTotal = document.getElementById('deposit-total');
console.log(depositTotal.innerText);
depositTotal.innerText = parseInt(depositTotal.innerText) + parseInt(depositAmount);

document.get
var balanceTotal = document.getElementById('balance-total');
balanceTotal.innerText = parseInt(balanceTotal.innerText) + parseInt(depositAmount);

//---------Deposit Add Total balance
// const balancetTotal = document.getElementById('balance-total');
// console.log(balanceTotal.innerText);
// balancetTotal.innerText = parseInt(balanceTotal.innerText) + parseInt(depositAmount);

depositInput.value = "";
});
const nameOfOrganization = document.getElementById("name").value;
   
console.log(nameOfOrganization);

document.getElementById('withdraw-button').addEventListener('click', function(){
    //console.log('click');
    const withdrawInput = document.getElementById('withdraw-input');
    const withdrawAmount = withdrawInput.value;
    //console.log(withdrawAmount);
    withdrawInput.value = "";

    const withdrawTotal = document.getElementById('withdraw-total');
    withdrawTotal.innerText = parseInt(withdrawTotal.innerText) + parseInt(withdrawAmount);

    var balanceTotal = document.getElementById('balance-total');
    balanceTotal.innerText = parseInt(balanceTotal.innerText) - parseInt(withdrawAmount);

})