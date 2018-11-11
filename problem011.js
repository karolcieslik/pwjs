// Karol Cieślik, pgk2

function deepFindAndCount(a, b) {
  var arrFlattens = [].concat(...a); 
  var counter = 0; 
  for (var i = 0; i < arrFlattens.length; i++)
    if(arrFlattens[i] == b)
        counter++;

  return counter;
}
