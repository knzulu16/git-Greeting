var count = 0;
var greet = '';
var namesGreeted = {};


function counter() {
  var Name = greet.value;
  if (namesGreeted[Name] === undefined) {
    namesGreeted[Name] = 0;
    count++;
  }
  return count;
}
