// Написать функцию сравнения двух массивов.
// fn([1, 2, 3], [1, 2, 3]) => true

////task 4////

function equalArrays(a,b) {
    if (a.length != b.length) return false;
    for(var i = 0; i < a.length; i++) {
        if (a[i] !== b[i]) return false
        else return true;
    }
}
console.log(equalArrays([1, 2, 3], [1, 2, 3]))