console.log('INFO: Starting to read scripts.js');

console.log('INFO: Getting access to elements');

function calculate() {

    const total = parseFloat(document.getElementById("total").value);
    const tip = parseFloat(document.getElementById("tip").value);
    const result = (total + (total*0.055) + tip) + 0.00;
    const result2 = parseFloat(result.toFixed(2));
    total1.innerHTML = `Total: $${total}`;
    tip1.innerHTML = `Tip: $${tip}`;
    GT.innerHTML = `Grand Total: $${result2}`;
    if(isNaN(result2)){
        document.getElementById("answer").style.color = "red";
        answer.innerHTML = "Enter some valid input";
    }
    else{
        document.getElementById("answer").style.color = "blue";
        answer.innerHTML = `Your total is: $${result2}`;
    }
   


}

