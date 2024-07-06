let moment = require('moment');



export function getTheAverage(){
    let mathGrade = parseFloat(document.getElementById('courseOne').value);
    let engGrade = parseFloat(document.getElementById('courseTwo').value);
    let sciGrade = parseFloat(document.getElementById('courseThree').value);
    let gymGrade = parseFloat(document.getElementById('courseFour').value);
    let elecGrade = parseFloat(document.getElementById('courseFive').value);
    
    
    let average = (mathGrade + engGrade + sciGrade + gymGrade + elecGrade) / 5;
    console.log(average)

    document.getElementById('average').innerHTML = `Average: ${average}`;
}

export function convertToLetter(){
    let mathGrade = parseFloat(document.getElementById('courseOne').value);
    let engGrade = parseFloat(document.getElementById('courseTwo').value);
    let sciGrade = parseFloat(document.getElementById('courseThree').value);
    let gymGrade = parseFloat(document.getElementById('courseFour').value);
    let elecGrade = parseFloat(document.getElementById('courseFive').value);

    let arrayOfGrades = [mathGrade, engGrade, sciGrade, gymGrade, elecGrade];

    let letterGrades = " ";

    for(let i = 0; i < arrayOfGrades.length; i++){
        if(arrayOfGrades[i] <= 50){
            letterGrades += " F ";
        }else if(arrayOfGrades[i] > 51 && arrayOfGrades[i] <= 65){
            letterGrades += " D ";
        }else if(arrayOfGrades[i] > 65 && arrayOfGrades[i] <= 75){
            letterGrades += " C ";
        }else if(arrayOfGrades[i] > 75 && arrayOfGrades[i] <= 85){
            letterGrades += " B ";
        }else if(arrayOfGrades[i] > 85 && arrayOfGrades[i] <= 95){
            letterGrades += " A ";
        }else if(arrayOfGrades[i] > 95 && arrayOfGrades[i] <= 100){
            letterGrades += " A+ "
        }else{
            letterGrades += "Grade out of scope"
        }
    }
    document.getElementById('letters').innerHTML = `Letter Grades: ${letterGrades}`;
}

export function minAndMax(){
    let mathGrade = parseFloat(document.getElementById('courseOne').value);
    let engGrade = parseFloat(document.getElementById('courseTwo').value);
    let sciGrade = parseFloat(document.getElementById('courseThree').value);
    let gymGrade = parseFloat(document.getElementById('courseFour').value);
    let elecGrade = parseFloat(document.getElementById('courseFive').value);

    let arrayOfGrades = [mathGrade, engGrade, sciGrade, gymGrade, elecGrade];

    let min = arrayOfGrades[0];

    for(let i = 0; i < arrayOfGrades.length; i++){
        if(arrayOfGrades[i] < min){
            min = arrayOfGrades[i];
        }
    }
    document.getElementById('min').innerHTML = `Min: ${min}`;

    let max = arrayOfGrades[0];

    for(let j = 0; j < arrayOfGrades.length; j++){
        if(arrayOfGrades[j] > max){
            max = arrayOfGrades[j];
        }
    }
    document.getElementById('max').innerHTML = `Max: ${max}`;
}

export function reset(){
    document.getElementById('max').innerHTML = "Max:";
    document.getElementById('min').innerHTML = "Min:";
    document.getElementById('letters').innerHTML = "Letter Grades:"
    document.getElementById('average').innerHTML = "Average:"
    document.getElementById('courseOne').value = "";
    document.getElementById('courseTwo').value = "";
    document.getElementById('courseThree').value = "";
    document.getElementById('courseFour').value = "";
    document.getElementById('courseFive').value = "";

}

document.addEventListener('DOMContentLoaded', function() {
    function updateTime() {
        document.getElementById('dateAndTime').innerHTML = moment().format('MMMM Do YYYY, h:mm:ss a');
    }
    updateTime();
    setInterval(updateTime, 1000);
});

window.getTheAverage = getTheAverage;
window.convertToLetter = convertToLetter;
window.minAndMax = minAndMax;
window.reset = reset;