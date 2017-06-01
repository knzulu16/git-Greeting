var count = 0;
var namesGreeted = {};


function myReset(){

  count = 0;
localStorage.setItem('count',0);
  return count;
}

function setCounter(){
  var currentCount=localStorage['count'];
  if(currentCount){
    count=Number(currentCount);
  }
  return count;
}



function counter(Name) {
  if (namesGreeted[Name] === undefined){
    namesGreeted[Name] = 0;
    count++;
localStorage['count']=count;
  }

  return count;
}
