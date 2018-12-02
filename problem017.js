 function compose(axe ) { 
   var len = arguments.length;
   var tabl = [];
   var z = 0;
     for (i = arguments.length - 1; i > -1; i--) {
         tabl[z] = arguments[i]; 
       z++;
    } 
   
    if(!axe) {
	    return function dd(value)
        {   
             return value;
		}
    }else
	{
		return function dd(value)
		{   
			  var result = value;
			  for (var q = 0; q < tabl.length; q++)
			  {
				var fun = tabl[q];
				result  =  fun(result);       
			  }

			return result;
		}
}
   
};