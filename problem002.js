// Karol Cieślik PGK2

 function stringRotate(a, b) {   
     if ((b < 0) || (b.length === 1 && b.match(/[a-z]/i))) return '';
   
     for (var i = 0; i < b; i++)
        a = a + a.charAt(i);
   
   a = a.slice(b, a.length)
   
   return a;
 }
 