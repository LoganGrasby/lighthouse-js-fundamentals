const ageCalc = function (name, yearBorn, currentYear) {
  let age = currentYear - yearBorn;
  return `${name} is ${age} years old`;
}

console.log(ageCalc("logan",1997,2020)); 