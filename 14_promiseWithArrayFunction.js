




const isSirAvailable = true;
let promiseForNotes = new Promise( function(resolve , reject){
if (isSirAvailable) {
    resolve("Promise and map .pdf---");  
}else {
    reject("Sorry i didnt get a time***");}
});

promiseForNotes
.then(success => console.log(success,"I Got notes let me Read it....."))
.catch(failure =>console.log(failure,"*Are Yaar kaisa teacher hai Yee*"))
.finally(console.log("You always have your Notes...."));

