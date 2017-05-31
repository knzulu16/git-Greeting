var count = 0;
var greet='';
var namesGreeted={};

var Name = greet.value;

function counter(){
    if (namesGreeted[Name] === undefined){
    namesGreeted[Name] = 0;
  }
  count++;
  return count;
}
