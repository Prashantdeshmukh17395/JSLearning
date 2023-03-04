function lastWordCharsCount(str) {

  if (str==null || str==undefined ) {
     console.log(`Given String is ${str} is - Invalid`);
     
  }else{
   
     var words = str.split(" ");
     var totalWords = words.length;
     for (let index = 1; index >=1; index--) {
      console.log(`Given string is "${str}" having a word length is = ${totalWords}`);     
     }
     return totalWords;
  }
  
}
lastWordCharsCount("JavaScript is the language Of Internet");
lastWordCharsCount("I am Angular Developer");
lastWordCharsCount("Hard work and commitment is the key of success");