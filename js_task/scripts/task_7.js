function deepEqual(first, second){
    if(first === second){
        return true;
    }
    // else {return false}
    if ((first==null)||(second==null)) {
        return false;
    }

    var propertiesInFirst = 0, propertiesInSecond = 0;
    for (var property in first) {
        propertiesInFirst += 1;
    }
    for (var property in second) {
        propertiesInSecond += 1;
        if (!(property in first) || !deepEqual(first[property], second[property])) {
            return false;        
        }
    }        
    return propertiesInFirst == propertiesInSecond;
}


var obj = {here: {is: "an"}, object: 2};
console.log(deepEqual(obj, obj));        
console.log(deepEqual(obj, {here: 1, object: 2}));
console.log(deepEqual(obj, {here: {is: "an"}, object: 2}));
