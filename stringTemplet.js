


// console.log("You are Champ man");
// console.log(`you are "champ" man...`);

// var firstName= Rohit;
// var lastName= Sharma;
// var city= Mumbai;
// console.log(`My First Name ${firstName} My Last Name ${lastName} City${city}`);



var lastWordCharsCount =function (str) {

    for (let index =-1; index < str.length; index--) {
        var char = str.charAt(index);
        lastWord= lastWord + char ;
         if (char==" ") {
            break;
            
         }
    } 
    return lastWord;
    
}
var lastWord= lastWordCharsCount("JavaScript is the language Of Internet") ;
console.log(`JavaScript is the language Of Internet--------Total number of character in last word:${lastWord}`);
