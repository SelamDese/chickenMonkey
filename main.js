for (let currentNumber = 1; currentNumber <= 100; currentNumber++) {
    
    if (currentNumber % 5 === 0 && currentNumber % 7 === 0) 
         {
        console.log("chickenMonkey") 
         } 
     else if (currentNumber % 7 === 0 )
         {
        console.log("monkey")
         }
     else if (currentNumber % 5 === 0 ) 
         { 
        console.log("chicken")
         }
     else
         {
        console.log(currentNumber)    
         }
}