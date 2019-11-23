let months = (function () {
    "use strict";

    var months_array = ["January", "February", "March", "April", "May", "June", "July", "August", "Semtember", "October", "November", "December"];

    return {
        name: function (month_n) {
            return months_array[month_n];
        },
        number: function (month_name) {
            return months_array.indexOf(month_name);
        }
    }
})();

console.log(months.name(3));
console.log(months.number("November"));
