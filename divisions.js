var leagueArray = ["Evan", "Kyle", "Kenny", "Simon", "Sean", "Austin", "Micah", "Mat", "Andrew", "Heath"];

function shuffle(array) {
  var newArray = array;
  for (var i = newArray.length - 1; i > 0; i--) {
    var j = Math.floor(Math.random() * (i + 1));
    var temp = newArray[i];
    newArray[i] = newArray[j];
    newArray[j] = temp
  };
  var divisions = {
    West: [],
    East: []
  };
  for (var k = 0; k < newArray.length; k++) {
    if(k % 2 === 0) {
      divisions.West.push(newArray[k]);
    } else {
      divisions.East.push(newArray[k]);
    };
  };
  return divisions;
};
shuffle(leagueArray);
