(function () {
    'use strict';
    var odd_string = "####";
    var even_string = " ####";

    for (var i = 1; i <= 8; i++) {
        if (i % 2 == 0) {
            console.log(odd_string);
        }
        else {
            console.log(even_string);
        }

    }

})();