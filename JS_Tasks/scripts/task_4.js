function range(first, second){
    var array = [];
    var j = 0;

    if(first<second){
    for(var i=first; i<=second; i++){
        array[j] = i;
        j++;
    }}

    else if(first>second){
    for(var i=second; i<=first; i++){
        array[j] = i;
        j++;
    }}
    return array;
}

function sum(array){
    var summ = 0;
    for(var i=0; i < array.length; i++){
        summ+=array[i];
    }
    return summ;

}
console.log(sum(range(1,10)));

function rangeModified(first, second, step){
    var array = [];
    var j = 0;

    if(first<second){
    for(var i=first; i<=second; i=i+step){
        array[j] = i;
        console.log(array[j]);
        j++;
    }}

    if(first>second){
    for(i=first; i>=second; i=i+step){
        array[j] = i;
        console.log(array[j]);
        j++;
    }}
    return array;
}

rangeModified(5,2,-1);