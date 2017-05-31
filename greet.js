var button = document.getElementById('myBtn');
var myRadio = document.getElementById("myRadio");
var output=document.getElementById("output");


var language = "";
myRadio.addEventListener('change', function(e) {
  language = e.target.value;

});

button.addEventListener('click', function(){
var greetElem=greet.value;
var msg=greetElem.innerHTML= inputName();
var lan=createMsg();
document.getElementById('para').innerHTML=inputName(greetElem,lan);
var greeting = document.getElementById('box').value = '';

counter();
myReset();
Reset();
document.getElementById('output').innerHTML= count;



});
