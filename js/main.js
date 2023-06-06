let numbers = [423, 287, 179, 11, 68];
y = numbers.map(function (number) {
    var a = 0;
    while (number > 0) {
        b = number % 10;
        a = (a * 10) + b;
        number = parseInt(number / 10);
    }
    return a;
})
document.write("Reverse of the numbers in array" + " " + y);