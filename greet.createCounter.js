var count = 0;
var greet='';
var namesGreeted={};
// var greetingsCounter = 0;

function counter(){
  var Name = greet.value;
    if (namesGreeted[Name] === undefined){
    namesGreeted[Name] = 0;
  }
  count++;

  return count;
}
