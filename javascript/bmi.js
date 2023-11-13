let btnCalc = document.querySelector(`[data-calculate]`);

btnCalc.addEventListener(`click`, calcBMI);

let display = document.querySelector(`[data-result]`);

function calcBMI(){
    let myHeight = document.querySelector(`[data-height]`).value;
    let myWeight = document.querySelector(`[data-weight]`).value;
    let heightAnswer = eval(`${myHeight} / 100`);
    let newHeightAnswer = eval(`${heightAnswer} * ${heightAnswer}`);
    let answer = eval(`${myWeight} / ${newHeightAnswer}`);
    if(answer >=40){
        display.innerText = `Your BMI is ${answer.toFixed(2)}. This means you are Serverly Obeses.`
    }
    else if(answer >=30){
        display.innerText = `Your BMI is ${answer.toFixed(2)}. This means you are Obeses.` 
    }
    else if(answer >=25){
        display.innerText = `Your BMI is ${answer.toFixed(2)}. This means you are Overweight.`
    }
    else if(answer >=18.5){
        display.innerText = `Your BMI is ${answer.toFixed(2)}. This means you are at a Healthy Weight.`
    }
    else if(answer <=18.4){
        display.innerText = `Your BMI is ${answer.toFixed(2)}. This means you are Underweight.`
    }
    // console.log(answer);
    // display.innerText = answer;
}