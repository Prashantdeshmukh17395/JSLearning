console.log("***********************Step1:Write a Function Exression to count vowels******************************");
var vowelsCount =  function (str){
      var count=0;
    for (let index = 0; index < str.length; index++) {
        var char = str.charAt(index);
        if (char == "a" || char =="e" || char =="i" || char=="o" || char =="u"|| char =="A"|| char =="E"|| char =="I"||char=="O"|| char =="U") {
            count = count + 1;
        
    var vowels = count;
    }
}
    return vowels
}
var vowels = vowelsCount("JavaScript is the language Of Internet");
console.log(`*******JavaScript is the language Of Internet******-------Total number of vowels is:${vowels}`);
var vowels = vowelsCount("I am Angular Developer");
console.log(`******I am Angular Developer*******-------Total number of vowels is:${vowels}`);
var vowels = vowelsCount("Hard work and commitment is the key of success");
console.log(`******Hard work and commitment is the key of success*******-------Total number of vowels is:${vowels}`);


console.log("***********************Step2:Find Total number of character in last word ******************************");
function lastWordCharsCount(str) {
     
    var words = str.split(" ");
    var totalWords = words.length;
    for (let index = 1; index >=1; index--) {
     console.log(`Given string is "${str}" having a word length is = ${totalWords}`);     
    }
    return totalWords;
}
lastWordCharsCount("JavaScript is the language Of Internet");
lastWordCharsCount("I am Angular Developer");
lastWordCharsCount("Hard work and commitment is the key of success");
