// function makeGreen(){
//     document.body.style.backgroundColor = 'green';
// }

// function makeGreen(){
//     document.body.style.backgroundColor = "green";
// }






// function makeGreen(){
//     document.body.style.backgroundColor = 'Green';
// }

const makeBlue = document.getElementById('make-blue');
console.log(makeBlue);

//makeBlue.onclick     = document.body.style.backgroundColor='blue';

// just set the name of the function;
makeBlue.onclick = makeBluebtn;
function makeBluebtn(){
    document.body.style.backgroundColor = 'blue';
}


function makeRed(){
    document.body.style.backgroundColor = 'red';
}
// const blackButton = document.getElementById('make-black');
//console.log(blackButton);
/* 
নাম না দেওয়া Function কে বলা হয়- Anonymous Function (মানে নাম নাই।)
 */
// blackButton.onclick = function (){
// document.body.style.backgroundColor = 'black';}

//           blackButton.onclick = function blackButton(){
//     document.body.style.backgroundColor = 'black';}



const blackButton = document.getElementById('make-black');
blackButton.addEventListener('click', makeBlack);
function makeBlack(){
    document.body.style.backgroundColor = 'black';}