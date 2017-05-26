var para = document.getElementById("para");
var greet = document.getElementById('box');

  function createMsg(){
    if(document.getElementById('IsiXhosa').checked===true){
      return 'IsiXhosa'
    }

    if(document.getElementById('English').checked===true){
      return 'English'
    }
    if(document.getElementById('Afrikaans').checked===true){
      return 'Afrikaans'
    }


  }
