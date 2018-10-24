// Karol Cieślik PGK2

function divisible(a) {
   for (var i = 0; i < arguments.length - 1; i++) {
     if(arguments[0] % arguments[i+1] !== 0 )
       return false;
  }
  
  return true;
}     