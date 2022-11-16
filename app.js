function takeInWord(){
    var typeAWord = prompt("type in any word");
   
   //convert string to arr &  reverse i
    let reversedWord = Array.from(typeAWord).reverse().join('');
    alert(reversedWord)
   
     }
  
     takeInWord()