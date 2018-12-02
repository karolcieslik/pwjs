 function reverse(func) { 
 
  return function dd(...manyMoreArgs)
  {   
     return func(...manyMoreArgs.reverse());
  }
};
