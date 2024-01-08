let operator="";
let firstNumber="";
let SecondNumber="";


function appendNumber(num){
if(operator===""){
    firstNumber+=num;
    document.getElementById("result").value=firstNumber;
}
else{
    SecondNumber+=num;
    document.getElementById("result").value=SecondNumber;
}



}

function SetOperator(op){
    operator=op;

}

function Calculate(){
    let result;
    switch(operator){
        case '+':
            result=parseInt(firstNumber)+parseInt(SecondNumber);
            break;
            case '-':
            result=parseInt(firstNumber)-parseInt(SecondNumber);           
            break;
            case '*':
            result=parseInt(firstNumber)*parseInt(SecondNumber);
            break;
            case '/':
            result=parseInt(firstNumber)/parseInt(SecondNumber);
            break;
    }
    document.getElementById('result').value=result;

}
function clearResult(){
    operator='';
    firstNumber='';
    SecondNumber='';
    document.getElementById('result').value='';
}
