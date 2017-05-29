var count = 0;
var greet='';
var namesGreeted={};
// var greetingsCounter = 0;
var Name = greet.value;

function counter(){
    if (namesGreeted[Name] === undefined){
    namesGreeted[Name] = 0;
    count++;
  }

  return count;
}
