
/*Declaring variables*/
var num1;
var num2;
var op;
var ans;

/*Function to take inputs and calculate*/
function calc(){
    num1=parseFloat(document.getElementById('num1').value);
    num2=parseFloat(document.getElementById('num2').value);
    op = document.getElementById('op').value;
    ans= document.getElementById('ans');

    switch (op) {
    case '+':
        ans.value = num1 + num2;
        break;
    case '-':
        ans.value = num1 - num2;
        break;
    case '*':
        ans.value = num1 * num2;
        break;
    case '/':
        if (num2 !== 0){
            ans.value = num1 / num2;
        } 
        else {
            ans.value = alert('Cannot divide by zero');
        }
        break;
    default:
         ans.value = alert('Invalid operator');
        break;
    }
}
/*To clear the answer field on-change and on-input*/
function clearFields() {
    document.getElementById('ans').value = '';

}

