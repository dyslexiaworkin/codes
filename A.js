function d(){
var count=0;
var radioButtonValue = document.querySelector('input[name="Q1"]:checked').value;
count += Number(radioButtonValue);
var radioButtonValue = document.querySelector('input[name="Q2"]:checked').value;
count += Number(radioButtonValue);
var radioButtonValue = document.querySelector('input[name="Q3"]:checked').value;
count += Number(radioButtonValue);
var radioButtonValue = document.querySelector('input[name="Q4"]:checked').value;
count += Number(radioButtonValue);
var radioButtonValue = document.querySelector('input[name="Q5"]:checked').value;
count += Number(radioButtonValue);
var radioButtonValue = document.querySelector('input[name="Q6"]:checked').value;
count += Number(radioButtonValue);
var radioButtonValue = document.querySelector('input[name="Q7"]:checked').value;
count += Number(radioButtonValue);
var radioButtonValue = document.querySelector('input[name="Q8"]:checked').value;
count += Number(radioButtonValue);
var radioButtonValue = document.querySelector('input[name="Q9"]:checked').value;
count += Number(radioButtonValue);
var radioButtonValue = document.querySelector('input[name="Q10"]:checked').value;
count += Number(radioButtonValue);
alert("Score is "+ count);
}