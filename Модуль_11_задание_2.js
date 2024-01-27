//Модуль 11, задание 2

//let inputValue = 19*23
//let inputValue = 327
//let inputValue = '327'
let inputValue = 'abc'
//let inputValue = 24.7

console.log(`${checkIfSimple(inputValue)}`)

function checkIfSimple(x) {
  let strOut = `Число ${x} является простым числом, ибо делится только на 1 и на само себя`
 
  let ckeckType = typeof(x)
  if( ckeckType != 'number' )
    {
      let strOut = `${x} не является числом!`    
      return strOut      
    }
  
  if (x == 0 || x == 1) 
    {
      let strOut = `Число ${x} не является простым или составным числом, ибо имеет только один делитель`
      return strOut
    }

  else if(x > 1000 || x < 0) 
    {
      let strOut = `Число ${x}:  Неверные данные`
      return strOut
    }
  else if(x - Math.trunc(x) !=0 )
    {
      let strOut = `Число ${x} не является натуральтым числом, ибо имеет дробную часть`  
      return strOut
    }
  else
    {
      let i = 2;         // skip division by 1
      while (i <= x/2)  // Если делитель > 1/2 от делимого, то нацело уже никак не получится. 
//      for(i=2; i <= x/2; i++)  // можно и таким циклом. Убрать let i = 2, while...  и i++  в конце.
      {
        let resid = x % i
        if ( resid == 0 ) 
        {
          let strOut = `Число ${x} является составным числом, ибо делится, как минимум, на ${i} нацело`
          return strOut 
        } // end if resid == 0
        i++
      }  // end while loop
    } // end else
    
  return strOut
}