const PersonInfo =(name,age) =>{
    const person = {
        name: name,
        age: age,

        talk(){
            console.log(`Hay my name is ${this.name} and age is ${this.age}`);
        },
    };
    return person
}
const p1 = PersonInfo("Durvesh kumar", 24);
const p2 = PersonInfo("Arvesh kumar", 20)
console.log(p1.talk());
console.log(p2.talk());

console.log(p1 === p2);  // Every persion create a copy
