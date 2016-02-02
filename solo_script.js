// ! ! !
// Three Bugs
//First bug was in our for loop in calling our calculateSTI function.  
//Should be calling the array at a certain index.  array[i]
//Second was subtracting 1 from our basePercent after the Switch.
//Third bug wasn't applying Math.round to the second index position 
//on line 54 like we should've.


var arrayAtticus = ["Atticus", "2405", "47000", 3];
var arrayJem = ["Jem", "62347", "63500", 4];
var arrayBoo = ["Boo", "11435", "54000", 3];
var arrayScout = ["Scout", "6243", "74750", 5];

var array = [arrayAtticus, arrayJem, arrayBoo, arrayScout];

//After each array index I need to add a space.
var arraySpaced = array.join(' ');

//Create variables used to write to the DOM
var newEl, newText, position, space;

//Capture the position of insertion into the DOM
position = document.getElementById('content');


//Loop the array, extracting each array and writing information to the DOM
//Note that the information is not 'clean'
for(var i = 0; i < array.length; i++){
  console.log('array = ' + array);
  array[i] = calculateSTI(array[i]);

  
  newEl = document.createElement('li');
	newText = document.createTextNode(array[i]);
  //space = document.createTextNode( " " );
  newEl.appendChild(newText);
  //array[i].appendChild(space);
	position.appendChild(newEl);
  //After each array index I need to add a space.


}


function calculateSTI(array1) {
  var newArray = [];
  newArray[0] = array1[0];

  var employeeNumber = array1[1];
  var baseSalary = array1[2];
  var reviewScore = array1[3];
  console.log(employeeNumber);
  console.log(baseSalary);
  console.log(reviewScore);


  var bonus = getBaseSTI(reviewScore) + getYearAdjustment(employeeNumber) - getIncomeAdjustment(baseSalary);
  if(bonus > 0.13){
    bonus = 0.13;
  }

  newArray[1] = bonus;
  newArray[2] = Math.round(baseSalary * (1.0 + bonus));
  newArray[3] = Math.round(baseSalary * bonus);
  console.log(newArray[0] + " " + newArray[1] + " " + newArray[2] + " " + newArray[3]);
  return newArray;

}

function getBaseSTI(reviewScore) {
  var basePercent;
  switch(reviewScore){
    case 1:
      basePercent = 0;
      break;
    case 2:
      basePercent = 0;
      break;
    case 3:
      basePercent = 0.04;
      break;
    case 4:
      basePercent = 0.06;
      break;
    case 5:
      basePercent = 0.10;
      break;
  }
  return basePercent; 
}

function getYearAdjustment(employeeNumber) {
  var yearAdjustment = 0;
  if(employeeNumber.length == 4){
    yearAdjustment = 0.05;
  }
  return yearAdjustment;
}

function getIncomeAdjustment(baseSalary) {
  var incomeAdjustment = 0;
  baseSalary = parseInt(baseSalary);
  if (baseSalary > 65000) {
    incomeAdjustment = 0.01;
  }
  return incomeAdjustment;
}