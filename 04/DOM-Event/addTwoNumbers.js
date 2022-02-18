// var addTwoNumbers = function(l1, l2) {
    
// };
/* 
Input: l1 = [2,4,3], l2 = [5,6,4]
Output: [7,0,8]
Explanation: 342 + 465 = 807.
Example 2:

Input: l1 = [0], l2 = [0]
Output: [0]
Example 3:

Input: l1 = [9,9,9,9,9,9,9], l2 = [9,9,9,9]
Output: [8,9,9,9,0,0,0,1]
 */


  var l1=[2,4,3];
  var l2=[5,6,4];
//var l3=[8,9,9,9,0,0,0,1]
var result = addTwoNumbers(l1,l2);
console.log(result);


function addTwoNumbers(l1, l2){
    var newArray = [];
    var carry = 0;
    var bigLength = l1.length;
    if(bigLength < l2.length){
        bigLength = l2.length; 
    }
    for(var i = 0; i<bigLength; i++){
        for (var j=i; j<=i;j++){
            var x = (l1[i] != null) ? l1[i] : 0;
            
            var y = (l2[j] != null) ? l2[j] : 0;
            //console.log(x,y);

            var sum = carry + x + y;
            carry = Math.floor(sum/10);
            var curr = sum%10;
            newArray.push(curr);
           // console.log(sum, carry, curr, typeof(curr));         
        }
    }
    if(carry != 0){
        newArray.push(carry);
    }
    return newArray;
};