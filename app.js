function processArray(arr, operation) {
    if (typeof operation === 'function') {
      const result = arr.map(element => operation(element));
      return result;
    } else {
      throw new Error();
    }
  }
  const myArray = [1, 2, 3, 4, 5];
function double(element) {
    return element * 2;
  }
const resultArray = processArray(myArray, double);
  console.log(resultArray);