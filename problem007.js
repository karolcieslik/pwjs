// Karol Cieślik PGK2

function findMax() {
  var maxNumber = arguments[0];
  
  for (var i = 0; i < arguments.length; i++)
    if (maxNumber < arguments[i])
      maxNumber = arguments[i];
  
  return maxNumber;
}