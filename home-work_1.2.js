// Написать функцию, которая будет удалять дубликаты из массива. (Использовать array.reduce)

////task--2/////
function deleteDublicate (array) {
    return array.reduce((acc, current) => {
      if (!acc.includes(current)) {
          acc.push(current);
      }
      return acc;
    }, []);
}
console.log(deleteDublicate(['cat','dog','cat','dog', 2 , 2 , 3]));