function makeListOfValues(startValue, stopValue, timeSpan) {
    let i = startValue;
    
    let intId = setInterval(function(){
      console.log(i);
      if(i == stopValue) {clearInterval(intId)}
      i++
    }, timeSpan );
  }
  makeListOfValues(1, 4, 1000)