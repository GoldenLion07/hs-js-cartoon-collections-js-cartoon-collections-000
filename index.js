function dwarfRollCall(dwarves) {

  var string = "";
  dwarves.forEach(function(element, index) { //forEach is a callback, takes two parameters.
  	string += (index+1 + ". " + element + " ");
  });
  return string;
}
//forEach method only works on arrays, it takes element and index or if renamed, name and i(index).
function summonCaptainPlanet(planeteerCalls){
  let summon = []; //defined new variable initialized to new array []
  for (var i = 0; i < planeteerCalls.length; i++) { //iterate through our calls
    summon.push(planeteerCalls[i].toUpperCase() + "!") //add new words to end of our array, capitalize, and concatenate exclamation point.
  }
  return summon; 
}

function longPlaneteerCalls(words) {
  for (var i = 0; i < words.length ; i++) {
    if (words[i].length > 4) {
      return true
    }
  }
  return false
}

function findTheCheese (foods) {
  var cheese = ['camembert', 'cheddar', 'gouda'] //array containing only 3 cheeses
  for (var i = 0; i < foods.length ; i++) { //iterate through that array
    var cheeseIndex = cheese.indexOf(foods[i]); //indexOf() method searches the entire array for that element.
    if(cheeseIndex !== -1) { //!== checks value and type
      return foods[i] //return our entire foods array
    }
  }
  return "no cheese!" //else case it returns 'no cheese!'
}
