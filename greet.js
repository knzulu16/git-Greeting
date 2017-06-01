var button = document.getElementById('myBtn');
var myRadio = document.getElementById("myRadio");
var output = document.getElementById("output");


var language = "";
myRadio.addEventListener('change', function(e) {
  language = e.target.value;

});


function displayCounter(counting){
  output.innerHTML=counting;
}

function displayMsg(message){
  para.innerHTML=message;
}
button.addEventListener('click', function(){
  var greetElem = greet.value;

  var lan = createMsg();
  var message = inputName(greetElem, lan);

displayMsg(message);

  displayCounter(counter(greetElem));
  clearBox();

  // document.getElementById('box').innerHTML = clear();

});

document.getElementById('reset').addEventListener('click',function(){
  var newCounter=myReset();
  displayCounter=newCounter;
  displayMsg("");
});
displayCounter(setCounter());
