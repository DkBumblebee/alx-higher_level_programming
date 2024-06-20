#!/usr/bin/node

export.callMeMoby = function (x, theFunction) {
    // loop through the number of times you want it to print 
    // then print it
    for (let i = 0; i < x; i++) {
        theFunction();
    }
}
