// Karol Cieślik, pgk2

var vectors = function() {};

vectors.prototype.sum = function(a, b) {
    if ((a.length != b.length) || !Array.isArray(a) || !Array.isArray(b))
        return false;

    var tempVector = [];

    for(var i = 0; i < a.length; i++) 
        tempVector.push(a[0] + b[0]);

        return tempVector;
}

vectors.prototype.mulByScalar = function(a, b) {
    function isInt(value) {
        return !isNaN(value) && !Array.isArray(value) && 
        (function(x) { return (x | 0) === x; })(parseFloat(value))
      }

      if(!isInt(b) || !Array.isArray(a)) return false;

      var tempVector = [];
      for(var i = 0; i < a.length; i++)
        tempVector.push(a[i] * b);

      return tempVector;
}

var Vectors = new vectors();
 