/*
Object Prototype
Prototype are the mechanism by which JavaScript object inherit features from one another.

It is like a simgle template object that all object inherit methode and properties from without having their own copy.

arr_proto_(refrence)
Array.prototype(actual object)
String.prototype

Note => Every object in JavaScript has a bult-in property, which is prototype. 
       The prototype is itself an object to the will have its own protype making what's called prototype chain 
       .The chain ends when we reach

*/

let array = [2,3,4,5,6,7,8,9];  // it has a prtotype property
console.log(array);
console.log("length is ", array.length);

let array2 = [1,2,3,4,5,6]
array2.sayHello = ()=>{
    console.log(`Hello array ${array}`);
}
array2.push(10)
console.log(array2);
console.log(array2._proto_);
array2._proto_push = (n) =>{
    console.log("pusing number", n);
}
array2._proto_push(11)
console.log(array2);
console.log(array2.prototype);