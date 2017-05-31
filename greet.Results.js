var para = document.getElementById("para");
var greet = document.getElementById('box');
var output = document.querySelector('#output');
var reset =document.getElementById('reset');
document.getElementById('output').innerHTML = count;



function Reset(){
localStorage.setItem('on_click', count);
document.getElementById("output").innerHTML = count;
  }

function clearBox(){
document.getElementById('box').value='';

}
function createMsg(){
  if (document.getElementById('IsiXhosa').checked === true) {
    return 'IsiXhosa'
  }

  if (document.getElementById('English').checked === true) {
    return 'English'
  }
  if (document.getElementById('Afrikaans').checked === true) {
    return 'Afrikaans'
  }

}
