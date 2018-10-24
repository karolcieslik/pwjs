// Karol Cieślik PGK2

function triangleArea(a, b, c) {
   // wzór Herona na policzenie pola trójkąta
   // area = sqrt{s(s-a)(s-b)(s-c)}
   // s = (a+b+c)/2
  
  if ((a <=0 || b <= 0 || c <= 0) || !(((a+b)>c)) || !(((b+c)>a)) || !(((a+c)>b)) ) 
     return -1;
  
  var s = (a+b+c)/2;
  var area = Math.round((Math.sqrt(s*(s - a)*(s - b)*(s - c))) * 100) / 100;
  
  return area;
}

console.log(triangleArea(5,6,7));