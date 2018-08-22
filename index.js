function dwarfRollCall(dwarves) {
  for (var i = 0; i < dwarves.length; i++) {
    dwarves.push(i+1 + ". " + dwarves[i])
  }
}

function summonCaptainPlanet(planeteerCalls){
  let summon = [];
  for (var i = 0; i < planeteerCalls.length; i++) {
    summon.push(planeteerCalls[i].toUpperCase() + "!")
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
  var cheese = ['camembert', 'cheddar', 'gouda']
  for (var i = 0; i < foods.length ; i++) {
    var cheeseIdx = cheese.indexOf(foods[i]);
    if(cheeseIdx !== -1) {
      return foods[i]
    }
  }
  return "no cheese!"
}
