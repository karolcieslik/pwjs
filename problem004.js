// Karol Cieślik PGK2

function getTotalNumberOfNewYaersEveSundays(a, b) {
 
  var liczba_niedziel = 0;
  
  for (var i = 0; i < (b-a)+1; i++)
  {
    var konkatenacja = "January 1, " + (a+i);
    var data = new Date(konkatenacja);
    var dzien = data.getDay();

    if(dzien === 0)
      liczba_niedziel++;
  }
  
  return liczba_niedziel;
}
