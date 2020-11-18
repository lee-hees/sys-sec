function addComma(num) {
    // var regexp = /\B(?=(\d{3})+(?!\d))/g;
    // return num.toString().replace(regexp, ',');

    var number_string = num.toString();
    var number_parts = number_string.split('.');
    var regexp = /\B(?=(\d{3})+(?!\d))/g;
    if (number_parts.length > 1) {
        return number_parts[0].replace(regexp, ',') + '.' + number_parts[1];
    }
    else {
        return number_string.replace(regexp, ',');
    }
}