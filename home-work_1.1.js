// Написать функцию, которая находит самое длинное слово в строке.
// строка - "What is the average airspeed velocity of an unladen swallow"

/*******task---1 */
function findLongestWord (str) {
    let arrStr = str.split(' ');
    let longestWord = '';
    for (let word of arrStr) {
       if (word.length > longestWord.length) {
        longestWord = word;
       }
    }
    return longestWord;
  };

console.log(findLongestWord("What is the average airspeed velocity of an unladen swallow"));