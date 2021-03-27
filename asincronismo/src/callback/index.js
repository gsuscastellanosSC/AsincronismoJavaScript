function sum(num1, num2) {
    return `${num1} + ${num2} = ${num1+num2}`;
}

function calc(num1, num2, funcionCallback) {
    return funcionCallback(num1, num2);
}
console.log(calc(6, 2, sum));








function printDate(dateNow) {
    console.log(dateNow);
}

function date(funcionCallback) {
    console.log('waiting...');
    console.log(new Date);
    return setTimeout(function() {
        let date = new Date;
        funcionCallback(date);
    }, 3000);
}
date(printDate);