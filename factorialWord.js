function factorialOfWordCount(str) {

    if (str==null || str==undefined ) {
       console.log(`Given String is ${str} is - Invalid`);
       
    }else{
       var words = str.split(" ");
       var totalWords = words.length;
       var factorial=1;
       for (let index = totalWords; index >=1; index--) {
          
          factorial = index * factorial;
       }
       console.log(`Total number of words in " ${str}"  is ${totalWords}-- And Factorial of "${str}" is = ${factorial}`);
    }
    
 }
 factorialOfWordCount("Revision is the Mother of Success");
 factorialOfWordCount(undefined);
 factorialOfWordCount("we never fail, we always learn");
 factorialOfWordCount(null);
 factorialOfWordCount("");
 factorialOfWordCount("I am a Engineer")
 factorialOfWordCount("Prashant Suresh Deshmukh");
 