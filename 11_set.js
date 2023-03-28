 const setOfNums = new Set();
setOfNums.add(2);
setOfNums.add(5);
setOfNums.add(6);
setOfNums.add(9);
setOfNums.add(5);
setOfNums.add(6);
setOfNums.add(8);

console.log(setOfNums);  //set the eliment without a duplicate

setOfNums.delete(5);
console.log(setOfNums);  // delet in element from set

console.log(setOfNums.values());   



// traversing a set

for (const element of setOfNums) {
    console.log(element);
    
}









