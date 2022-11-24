// Написать функцию, которая преобразует многомерный массив в одномерный. 
// fn([1, 2, [3, 4, [5]]] => [1, 2, 3, 4, 5])

//////task 5//////

function putIntoOneArr (arrays) {
    return arrays.join().split(" ")
}
console.log(putIntoOneArr([1, 2, [3, 4, [5]]]));