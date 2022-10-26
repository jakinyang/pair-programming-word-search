// Wordsearch takes two parameters: matrix (matrix), word (target)
const wordSearch = (matrix, word) => { 
  // Catches any invalid target search words
  if(word === undefined || word === null || word === '') {
    return false;
  }
  // An array with each row joined into a string is stored in the variable horizontalJoin
    const horizontalJoin = matrix.map(row => row.join(''));
    // VerticalJoin 1st Attempt Code
    let verticalJoin = [];
    // Loop over matrix
    for (let i = 0; i < matrix.length; i++){
      // Loop over matrix[i]
        for (let j = 0; j < matrix[i].length; j++){
            if (!verticalJoin[j]) verticalJoin.push([]);
            verticalJoin[j][i] = matrix[i][j];
        }
    };
    verticalJoin = verticalJoin.map(row => row.join(''));
    for (stringRow of verticalJoin) {
        if (stringRow.includes(word)) return true;
    };
    
    
    // For loop loops over each string in the array of strings1
    for (stringRow of horizontalJoin) {
        // If the horizontal row includes the target word return true
        if (stringRow.includes(word)) return true;
    }
    return false;
}

module.exports = wordSearch;