const calcPower = (x, n) => {
    res = typeof(x)
    if(res != 'number') {
      console.log(`Основание степени ${x} не число!`)
      return }
    res = typeof(n)
    if(res != 'number') {
      console.log(`Показатель степень ${n} не число!`) 
      return}
   
    res = x - Math.round(x) 
    if(x <= 0 || res != 0) {
      console.log(`Число ${x} не является натуральным. Стоп.`)
      return } 
  
    res = n - Math.round(n) 
    if(n <= 0 || res != 0) {
      console.log(`Число ${n} не является натуральным. Стоп.`)
      return } 
  
   console.log(x**n) 
  }
  calcPower(3, 13)  //просто 2 числа
  calcPower(3, -1)  //проверка на натуральность
  calcPower(3, 2.4) //проверка на натуральность
  calcPower(3.1, 2) //проверка на натуральность
  calcPower(-3, 2)  //проверка на натуральность
  calcPower('abx', 2) //проверка на тип 
  calcPower(3, 'xyz')  //проверка на тип 
  calcPower(3, true)  //проверка на тип 
  calcPower(false, 2)  //проверка на тип 
  calcPower(3, NaN)  //проверка на тип 
  calcPower(3, null)  //проверка на тип 