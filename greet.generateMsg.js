function generateMsg(name, language){
  if (language == 'IsiXhosa'){
    return 'Molweni,' + name;

  } else if (language == 'English'){
    return 'Hello,' + name;

  } else if (language == "Afrikaans"){
    return 'Goeie dag,' + name;

  }
}
