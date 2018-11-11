// Karol Cieślik, pgk2

function deepCopy(obj) {
    if (typeof obj == 'object') {
        var l = obj.length;
        var r = new Array(l);
        for (var i = 0; i < l; i++) {
          r[i] = deepCopy(obj[i]);
        }
        return r;
    }
    return obj;
  }

