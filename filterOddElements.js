function filterOddElements(arr){
    let numImpar = arr.filter(impares);
      return numImpar;
    }
    
    function impares(numero){
      return numero % 2 !== 0;
    }
    module.exports = filterOddElements;