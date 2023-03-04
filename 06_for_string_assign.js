console.log("***********************Step1:Write a Function Exression to count vowels******************************");
var vowelsStr=  function (count) {
    var str = "JavaScript is the language Of Internet";
    var count = 0;
    for (let index = 0; index < str.length; index++) {
        var char = str.charAt(index);
        if (char == "a" || char =="e" || char =="i" || char=="o" || char =="u"|| char =="I"||char=="O") {
            count = count + 1;
        }
    }  return count
 
     
 }
 var count= vowelsStr("JavaScript is the language Of Internet");
 console.log(`******JavaScript is the language Of Internet*******-------Total number of vowels is:${count}` );


var vowelsStr=  function (count) {
    var str = "I am Angular Developer";
    var count = 0;
    for (let index = 0; index < str.length; index++) {
        var char = str.charAt(index);
        if (char == "a" || char =="e" || char =="i" || char=="o" || char =="u"|| char =="A"|| char =="E"|| char =="I"||char=="O"||char=="U") {
            count = count + 1;
        }
    }  return count
 
     
 }
 var count= vowelsStr("I am Angular Developer");
 console.log(`******I am Angular Developer*******-------Total number of vowels is:${count}` );

 vowelsStr=  function (count) {
    var str = "Hard work and commitment is the key of success";
    var count = 0;
    for (let index = 0; index < str.length; index++) {
        var char = str.charAt(index);
        if (char == "a" || char =="e" || char =="i" || char=="o" || char =="u"|| char =="I"||char=="O") {
            count = count + 1;
        }
    }  return count
 
     
 }
 var count= vowelsStr("Hard work and commitment is the key of success");
 console.log(`******Hard work and commitment is the key of success*******-------Total number of vowels is:${count}` );


 console.log("***********************Step2:Find Total number of character in last word ******************************");
 
 function lastWordCharsCount (count) {
    var str ="JavaScript is the language Of Internet";
    var count = 0;
    for (let index =29; index < str.length; index++) {
        var char = str.charAt(index);
         {
            count = count + 1;
        }
    } 
    return count
    
}
var count= lastWordCharsCount("JavaScript is the language Of Internet") ;
console.log(`JavaScript is the language Of Internet--------Total number of character in last word:`,count);



 function lastWordCharsCount (str) {
    var str = "I am Angular Developer";
    var count = 0;
    for (let index =13; index < str.length; index++) {
        var char = str.charAt(index);
         {
            count = count + 1;
        }
    } 
    return count
    
}
var count= lastWordCharsCount("I am Angular Developer") ;
console.log(`I am Angular Developer--------Total number of character in last word:`,count);