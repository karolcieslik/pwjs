// Karol Cieślik, pgk2

function parametricSort(a,b) {
    if(b == "asc")
        return  a.sort(function(q, w){return q-w});
    else if(b == "desc")
        return  a.sort(function(q, w){return w-q});
    else
        return false;
}
 