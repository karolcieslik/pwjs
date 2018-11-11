// Karol Cieślik, pgk2

function objectsDiff(o1, o2) {
    const ordered01 = {};
    const ordered02 = {};
    var  keys01 = [], keys02 = [], k;

    Object.keys(o1).sort().forEach(function(key) {
        ordered01[key] = o1[key];
    });

    Object.keys(o2).sort().forEach(function(key) {
        ordered02[key] = o2[key];
      });
  
      for (k in ordered01) {
        if (ordered01.hasOwnProperty(k)) {
          keys01.push(k);
        }
      }
      
      for (k in ordered02) {
        if (ordered02.hasOwnProperty(k)) {
          keys02.push(k);
        }
      }

        keys01.sort();
        keys02.sort();

    var tempDiff = [];
    tempDiff.push(keys01.diff(keys02));
    tempDiff.push(keys02.diff(keys01));
    
    return tempDiff;
}

Array.prototype.diff = function(a) {
    return this.filter(function(i) {return a.indexOf(i) < 0;});
};
 