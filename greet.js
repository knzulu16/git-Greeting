var greet = document.getElementById('box');
var button = document.getElementById('myBtn');
var para = document.getElementById("para");
var myRadio = document.getElementById("myRadio");
var output=document.getElementById("output");
var count = 0;
var namesGreeted = {};
var greetingsCounter = 0;


//var Isi=document.getElementById("Isi");
//var Eng=document.getElementById("Eng");
//var Afri=document.getElementById("Afri");

var language = "";
myRadio.addEventListener('change', function(e) {
  language = e.target.value;
  //console.log(language);
})
button.addEventListener('click', function() {

  var Name = greet.value;
  if (namesGreeted[Name] === undefined) {}
  inputName(Name,language,para);

  counter(output);
});
  //
  //   greetingsCounter++;
  //   namesGreeted[Name] = 0;
  //   // greetingsElem.innerHTML = greetingsCounter;
  //
  //
  //   if (language == 'IsiXhosa') {
  //     // console.log(language);
  //
  //
  //     para.innerHTML = 'Molo ' + greet.value;
  //
  //
  //   } else if (language == 'English') {
  //     para.innerHTML = 'Hello ' + greet.value;
  //
  //   } else if (language == 'Afrikaans') {
  //     para.innerHTML = 'Goeie dag ' + greet.value;
  //   }


    var greeting = document.getElementById('box').value = '';
    //var count=0;
//     var count = localStorage.getItem('on_click')
//     if (count == null) {
//       count = 0;
//     }
//     count++;
//     localStorage.setItem('on_click', count);
//     document.getElementById("output").innerHTML = count;
//   }
// });

function myReset(){
  localStorage.removeItem('on_click');
  document.getElementById('output').innerHTML = count;
}






// add();
// myFunction();
// clickCounter();


// function add() {
//     count++;
//      return count;
//
//
// }
// document.getElementById("myForm").reset;
//
//function clickCounter(){

//}

//if(typeof(Storage) !== "undefined") {
//if (sessionStorage.clickcount) {
//sessionStorage.clickcount = Number(sessionStorage.clickcount)+1;
//} else {
//sessionStorage.clickcount = 1;
//}
//document.getElementById("output").innerHTML = "You have clicked the button " + sessionStorage.clickcount + " time(s)";
//} else {
//document.getElementById("myBtn").innerHTML = count;
//}



//}







//
// function greeting()
// {
//       if(language[0].checked)
//       {
//         para.innerHTML = "Molo" + " "+ box.value;
//       }
//
//       else if(language[1].checked)
//       {
//        para.innerHTML = 'Hello' +greet.value;
//       }
//
//       else if  (language[2].checked)
//       {
//        para.innerHTML = 'Goeie dag' +" "+ box.value;
//       }
//
//       return box.value;
// };

// var greet = document.getElementById('myBtn').myTextBox= 'hello';









/*

function myGreet(){

  //var greeting = document.getElementById('box')
  // .addEventListener("click",function(){

  var greeting = document.getElementById('box');

  document.getElementById('para').innerHTML = 'Hello, ' + greeting.value;

};*/
