function inputName(name,language){
  var greet='';
  var greetings=greet.value;
    if (language =='IsiXhosa'){
     greetings='Molweni,'+name;
    //  para.innerHTML = greetings;
     return greetings
    }
    else if(language=='English'){
      greetings='Hello,'+name;
      // para.innerHTML=greetings;
      return greetings;

    }
    else if(language=="Afrikaans"){
      greetings='Goeie dag,'+name;
      // para.innerHTML=greetings;
      return greetings;

    }

}
