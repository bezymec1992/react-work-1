// Написать функцию, которая будет возвращать сумму квадратов элементов исходного массива.
// fn([1, 2, 3, 4, 5]) - должно быть равно 55



//////task 3//////
function squareSum(numbers) {
    let out = 0;
    for(number of numbers) {
        let res = number * number;
        out += res;
    }
    return out;
}

console.log(squareSum([1, 2, 3, 4, 5]));