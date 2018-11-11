// Karol Cieślik, pgk2

var stack = function() {
   this.stack = [];
};

stack.prototype.push = function(x,y = 1) {
    
    for(var i = 0; i < y+1; i++) {
        if (i == y-1){
            this.stack.insert(y,x);
        } else {
            if(typeof this.stack[i] === 'undefined') {
                this.stack.insert(i,null);
            }
        }
    }
};

stack.prototype.pop = function(numElements = 1) {
    var lastElementStack = [];
    for(var i = 0; i < numElements ; i++) 
        lastElementStack = this.stack.pop();

    return lastElementStack;
};

Array.prototype.insert = function ( index, item ) {
    this.splice( index, 0, item );
};

var Stack = new stack();