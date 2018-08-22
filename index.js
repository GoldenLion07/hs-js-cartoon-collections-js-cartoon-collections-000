function dwarfRollCall(dwarves) {
  var newArr = [];
	dwarves.forEach(function(name, i) {
		newArr.push(i+1 +". " + name);
	});
	return newStr.join(" ");
}

function summonCaptainPlanet(planeteerCalls){
  for (var i = 0; i < planeteerCalls.length; i++) {
    if (planeteerCalls[i] > 4) {
      return true
    }
  }
  return false
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
  var cheese = ['swiss', 'cheddar', 'guyere']
  for (var i = 0; i < foods.length ; i++) {
    var cheeseIdx = cheese.indexOf(foods[i]);
    if(cheeseIdx !== -1) {
      return foods[i]
    }
  }
  return "no cheese!"
}
