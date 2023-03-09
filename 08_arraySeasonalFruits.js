let arraySeasonalFruits = ["Banana","Orange","Apple","Mango","Water Melon"];
console.log("**********(1)***********");
console.log(" First Element in Given array: ");
console.log("          Banana          ");

console.log(" Last Element in Given array : ");
console.log("          Water Melon          ");

console.log("**********(2)***********");
console.log("Adding Papaya before Banana in Given array:");
arraySeasonalFruits.unshift("Papaya");     
console.log(arraySeasonalFruits);


console.log("**********(3)***********");
console.log("Removing Mango from Given array:");
const spliceArray= arraySeasonalFruits.splice(4 , 1);                     
console.log(arraySeasonalFruits);

console.log("**********(4)***********");
console.log("Insert an Element Pineapple at Last Position :");
arraySeasonalFruits.push("Pineapple")
console.log(arraySeasonalFruits);

console.log("**********(5)***********");
console.log("Insert an Element-- Dragon Fruit -- before Water Melon :");
arraySeasonalFruits.splice(4,0,"Dragon Fruit");            
console.log(arraySeasonalFruits);

console.log("**********(6)***********");
console.log("Replace an Element -- Kiwi -- with Orange :");
arraySeasonalFruits.splice(2,1,"Kiwi");                          
console.log(arraySeasonalFruits);

console.log("**********(7)***********");
console.log("Log the elements starting index 1 to 4");
const subArray= arraySeasonalFruits.slice(1 , 5);   
console.log(subArray);

console.log("**********(8)***********");
console.log("  Only select last 3 Element  ");            
const arrayFromIndex= arraySeasonalFruits.slice(4);    
console.log(arrayFromIndex);




