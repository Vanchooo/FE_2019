let months = (function () {
    let data = {
        months_array:["January", "February", "March", "April", "May", "June", "July", "August", "Semtember", "October", "November", "December"]
    };

    return {
        name: function(month_n) {
            data.months_array[month_n]
        }
    }
})();

console.log(months.name(3));
