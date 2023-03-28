

const mapOfNumbers = new Map();
mapOfNumbers.set("One", 1);
mapOfNumbers.set("Two", 2);
mapOfNumbers.set("Three",3);
mapOfNumbers.set("Four", 4);
mapOfNumbers.set("six", 11);
console.log(mapOfNumbers.size);
console.table( mapOfNumbers);



console.log(mapOfNumbers.get(`Two`));         // 

// mapOfNumbers.delete("One")                          // delet element key
// console.log(mapOfNumbers.delete("One"));


const keyInMap =mapOfNumbers.keys();             // find all keys
console.log(keyInMap);


const valueInMap =mapOfNumbers.values();      //find all values
console.log(valueInMap);



const keyOfMap =mapOfNumbers.keys();             // transverse for all keys
console.log(keyOfMap);
for (const key of keyOfMap) {
    console.log(key , mapOfNumbers.get(key));
    
}


