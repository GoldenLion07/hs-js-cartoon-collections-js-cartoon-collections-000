function dwarfRollCall(dwarves) {

  var string = "";
  dwarves.forEach(function(element, index) { //forEach is a callback, takes two parameters.
  	string += (index+1 + ". " + element + " ");
  });
  return string;
}

//forEach method only works on arrays, it takes element and index or if renamed, name and i(index).
//This function takes the dwarves array as a parameter, returns a string that is a numbered list based on an array. 
//Analogy, Snow White's posse rolls up to the club and it's a busy night. The lines are long and the dwarves are on the VIP list, so the bouncer admits them based on their position in line. 

function summonCaptainPlanet(planeteerCalls){
  let summon = []; //defined new variable initialized to new array []
  for (var i = 0; i < planeteerCalls.length; i++) { //iterate through our calls
    summon.push(planeteerCalls[i].toUpperCase() + "!") //add new words to end of our array, capitalize, and concatenate exclamation point.
  }
  return summon; 
}

//summonCaptainPlanet takes the calls of our planeteers and adds an eclamation point to the end of their calls. It iterates through our entire planeteer calls array, puts all the elements in uppercase and adds an exclamation point.
//Analogy; To summon Captain Planet, we need to throw our rings to the sky and shout 'Fire', 'Air', 'Water', 'Earth', and 'Heart'. If we don't shout it the elements won't combine and our Hero won't arrive.

function longPlaneteerCalls(words) {
  for (var i = 0; i < words.length ; i++) {
    if (words[i].length > 4) {
      return true
    }
  }
  return false
}

//longPlaneteerCalls takes the words array and returns true or false depending upon the number of elements in our array(length).
//if the words are longer return true, if it isn't return false.
//Analogy; 5 is the magic number, no more no less. We can't summon our hero if we don't have the 5 elements.

function findTheCheese (foods) {
  var cheese = ['camembert', 'cheddar', 'gouda'] //array containing only 3 cheeses
  for (var i = 0; i < foods.length ; i++) { //iterate through that array
    var cheeseIndex = cheese.indexOf(foods[i]); //indexOf() method searches the entire array for that element.
    if(cheeseIndex !== -1) { //non-identity(strict): !== checks value and type
      return foods[i] //return our entire foods array
    }
  }
  return "no cheese!" //else case it returns 'no cheese!'
}

//findTheCheese takes an array of strings and searches for an element that is a cheese.
//create a new array containing three types of cheeses
//loop through that array => use new variable and set it equal to array => attach method that searches array for the element (Cheddar)
//set up conditional; if the variable does not equal last element of the array return true, cheese is found.
//if cheese isn't found then return 'no cheese'
//Analogy: We are shopping on Amazon's new Prime Now service and we want sharp cheddar, we select it and pay for in the hopes that our packer finds said item and ships it out. He searches through the entire store and finds the item and we are happy customers! Good going Amazon!
//Let's say he doesn't find it, what's going to happen is that we get a little text bubble saying that the sharp cheddar isn't there. So whatever amount we paid is going to be refunded back into our credit card. Mick Jagger was right, sometimes 'You can't always get what you want'.