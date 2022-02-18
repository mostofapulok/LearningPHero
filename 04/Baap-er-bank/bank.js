document.getElementById('login-submit').addEventListener('click', function(){
    // get user email
    const emailField = document.getElementById('user-email');
    const userEmail = emailField.value;
    console.log(userEmail);

    // get user password
    const passField = document.getElementById('user-pass');
    const userPass = passField.value;
    console.log(userPass);

    // check email and password
    if(userEmail == "sontan@baap.com" && userPass == "123456"){
        console.log('valid user');
        window.location.href ="banking.html";
    }
});

document.getElementById('deposit-button').addEventListener('click', function(){
    console.log('clicke')
const depositInput = document.getElementById('deposit-input');
console.log(depositInput.value);
//console.log(depositInput.value);
});