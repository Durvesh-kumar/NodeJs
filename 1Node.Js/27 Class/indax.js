class PersonInfor {
    constructor(name, age){
        this.name = name;
        this.age = age;
    }
    talk (){
        console.log(`hey my name is ${this.name} and age is ${this.age}`);
    }
}

let p1 = new PersonInfor("Durvesh", 23);
let p2 = new PersonInfor("Arvesh", 20);

console.log(p1.talk() === p2.talk());