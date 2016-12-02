var myArray = [1,2,3,4,0,5,4,-6,7];
  function sumOfPairs (X){
  var results = [];
   for(var i of myArray) {
    if (sumOfPairs[X - i] === true) {
        results.push([ a= i,b= X -i]);
      }
       sumOfPairs[i] = true;
    }
  return results;
}
console.log(sumOfPairs(5))
