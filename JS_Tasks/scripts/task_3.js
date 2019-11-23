let math_operations = (function () {
    var answer;

    return {
        min: function (first, second) {
            if (first < second) {
                answer = first;
            }
            else if (first > second) {
                answer = second;
            }
            else if (first == second) {
                answer = 'equal';
            }

            return answer;
        }
    }

})();

console.log(math_operations.min(0, 10));
console.log(math_operations.min(0, -10));
console.log(math_operations.min(10, 10));