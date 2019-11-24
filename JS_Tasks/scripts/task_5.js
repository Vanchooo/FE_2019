// все согласно заданию, первый метод возвращает новый массив
// второй изменяет оригинальный массив
var first_array = [1, 2, 3, 4, 5, 6, 7];

function reverseArray(array){
    var new_array =[];
    for(var i=0; i < array.length; i++){
        new_array[i] = array[array.length - i -1];
    }
    return new_array;

}
console.log(reverseArray(first_array));

// доказательство, что первый метод не меняет оригинальный массив
// reverseArray(first_array);
// console.log(first_array);

var second_array = [1, 2, 3, 4, 5, 6, 7];

function reverseArrayInPlay(array){
    for(var i=0; i < array.length/2; i++){
        element = array[i];
        array[i] = array[array.length - i -1];
        array[array.length - i -1] = element;
        
    }
    return array;

}
reverseArrayInPlay(second_array);
console.log(second_array);