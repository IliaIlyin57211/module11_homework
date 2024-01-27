//Модуль 11, Задание 1
function countOddEvenNum() {

    let myArr = [1, 3, 'xyz', 5, 6, false, 2, 0, 2, null, 11, '+%=', -4, -8, -7, NaN]
    let arrLen = myArr.length
  
    let countZero = 0; let countOdd = 0; let countEven = 0; let countNonnum = 0;
    let i = 0
    while (i < arrLen) 
    {
      let checkType = typeof(myArr[i])
  //  console.log(`i = ${i}, check_type = ${check_type}`)
      if (checkType != 'number') {
        countNonnum++
        i++
        continue}
      resid = myArr[i] % 2
      if (myArr[i] == 0 && resid == 0) {
        countZero++
      }
      else if (myArr[i] != 0 && resid == 0) {
        countEven++
      }
  
      else {
        countOdd++
      }
      i++
    }
    console.log(`Число нечётных значенией:   ${countOdd}  `)
    console.log(`Число чётных значенией:     ${countEven} `)
    console.log(`Число нулевых значенией:    ${countZero} `)
    console.log(`Число нечисловых значений:  ${countNonnum} `)
  }
  
  countOddEvenNum()