let globalVariable =600;
function outer() {
    console.log("This is outer function");
    let outerFunVariable =300;
let inner = function () {
    console.log("This id inner function");
    let innerFunVariable =100;
    console.log(innerFunVariable);
    console.log(outerFunVariable);
    console.log(globalVariable);
}
return inner;
    
}

outer()();
// const innerFun = outer();
//  innerFun();