function dwarfRollCall(dwarves) {
  var string = "";
  dwarves.forEach(function(name, i) {
  	string += (i+1 + ". " + name + " ");
  });
  return string;
}

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
    var cheeseIndex = cheese.indexOf(foods[i]); //indexOf() method searches for a specific element
    if(cheeseIndex !== -1) {
      return foods[i]
    }
  }
  return "no cheese!"
}
