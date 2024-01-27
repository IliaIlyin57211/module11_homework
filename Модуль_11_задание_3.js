let getVal = function(a = 0) {
  return function(b = 0){
    let result = a + b
    return result
  }
}

x = 22
y = 33
let getSum = getVal(x)
console.log(getSum(y))