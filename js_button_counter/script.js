const btnMinus = document.getElementById("minus");
const btnPlus = document.getElementById("plus");
const countDisplay = document.getElementById("display");

let counter = 0;
let increment = 5;

btnPlus.addEventListener('click', function (){
    counter += increment;
    console.log(counter);
    countDisplay.innerText = counter; 
});

btnMinus.addEventListener('click', function (){
    if(counter < increment) {
        counter; 
    } else {
        counter -= increment;
        console.log(counter);
        countDisplay.innerText = counter;
    }
    
});





//on click event for each button 


// p.innertext to change value with each button click 