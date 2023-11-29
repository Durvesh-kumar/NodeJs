// Constructors > It does not return anything & start with capital
function PersonInfo (name,age){
            this.name= name;
            this.age= age;

}
PersonInfo.prototype.talk = (params) => {
    console.log(`hey my name is ${this.name} and age is ${this.age}`);
}
let p1 = new PersonInfo("Durvesh kumar", 24);
let p2 = new PersonInfo("Arvesh kumar", 20);

console.log(p1);
console.log(p2);
console.log(p1 === p2);