 // Karol Cieślik, pgk2

function objectsDiff (o1,o2) {
  var temp = [];
  var check = false;
  for(k in o1) {
    for(z in o2) { 
      if (k == z)
        check = true;
    }
    if (check == true) {
      check = false;
    } else {
      temp.push(k);
    }
  }

  for(k in o2) {
    for(z in o1) { 
      if (k == z)
        check = true;
    }
    if (check == true) {
      check = false;
    } else {
      temp.push(k);
    }
  }

  return temp;
} 