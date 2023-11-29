class Person {
    constructor (name, age) {
        this.name = name;
        this.age = age;
    }
    talk(){
        console.log(`hey my name is ${this.name}`);
    }
}

class PersonInfo1 extends Person {
    constructor (name,age, marks) {
        super(name,age); // Parent class constrector is being calling
        this.marks= marks;
    }
}

class PersonInfo2 extends Person {
    constructor (name, age, subject) {
        super(name,age); // Parent class constrector is being calling
        this.subject= subject;
    }
}