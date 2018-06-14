function findPairForSum(array, number) {
    var num = [];
    for (let i = 0; i < array.length; i++)
    {  
      for (let x = 1; x < array.length; x++)
      {
            if(array[i] + array[x] == number)
          {
              num.push(array[i]);
              num.push(array[x]);
          }
        }
    }
      return num
  }
  module.exports = findPairForSum;