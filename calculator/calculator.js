function calculate(){
    var num1 = Number(prompt("Enter the first number"));
    var operator = prompt("Enter the operator (+ - * /)");
    var num2 = Number(prompt("Enter the second number"));

    if(operator =="+"){
        var sum = num1 + num2;
        document.getElementById("results").innerHTML=`
        <p> ${num1} + ${num2} = ${sum} </p>`;
    }if(operator =="-"){
        var difference = num1 - num2;
        document.getElementById("results").innerHTML=`
        <p> ${num1} - ${num2} = ${difference} </p>`;
    }if(operator =="*"){
        var product = num1 * num2;
        document.getElementById("results").innerHTML=`
        <p> ${num1} * ${num2} = ${product} </p>`;
    }if(operator =="/"){
        var quotient = num1 / num2;
        document.getElementById("results").innerHTML=`
        <p> ${num1} / ${num2} = ${quotient} </p>`;
    }

}