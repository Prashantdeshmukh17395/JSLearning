// console.log("Prashant Deshmukh");
  

function checkPalindrome(str) {
    
    // applying split, revere and join
    const reversedString = str.split('').reverse().join('');
    if(str === reversedString)
          return true;
    else
          return false;
}


result = checkPalindrome("abcd dcba")
if(result == true){
	console.log("The given string is Palindrome");
}
else{
  	console.log("The given string is NOT Palindrome");
}


function checkPalindromeNumber(number)
{
    var remainder, temp, reversedNumber = 0;
    temp = number;
    
    // our reverse logic for numbers
    while(number > 0)
    {
        remainder = number % 10;
        number = parseInt(number / 10);
        reversedNumber = reversedNumber*10 + remainder;
    }
    //check whether the number is palindrome
    if(reversedNumber == temp)
    {
        console.log("The given number is Palindrome");
    }
    else
    {
        console.log("The given number is not palindrome");
    }
}

checkPalindromeNumber(50) 


