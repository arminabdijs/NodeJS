/*const personAli = {
    id: 1,
    name: "Ali",
    age: 23,
    email: "ali@gmail.com",
    city: "New York",
}
const personAmin = {
    id: 2,
    name: "Amin",
    age: 25,
    email: "amin@gmail.com",
    city: "Los Angeles",
}

const personAmir = {
    id: 3,
    name: "Amir",
    age: 27,
    email: "amir@gmail.com",
    city: "Chicago",
}*/
//----------------------------------------------------------------
//OOP => Object oriented programming -Class
//functional =>auth - Register - login - getCourses
//The names they choose for classes start with capital letters.
class Person {
    constructor(id, name, age, email, city) {
        this.id = id;
        this.name = name;
        this.age = age;
        this.email = email;
        this.city = city;
    }
}

const personAli = new Person(1, "Ali", 23, "ali@gmail.com", "New York");
const personAmin = new Person(2, "Amin", 23, "Amin@gmail.com", "los Angeles");

console.log(personAli)
console.log(personAmin)


//----------------------------------------------------------------
//method class
class Course {
    constructor(id, title, price, instructor, duration) {
        this.id = id;
        this.title = title;
        this.price = price;
        this.instructor = instructor;
        this.duration = duration;
    }

    register(person) {
        console.log(`${person.name} has registered for the course ${this.title}`);
    }
}

const courseNodejs = new Course(1, "Nodejs", 200, "John Doe", "3 months");
courseNodejs.register(personAli);


//----------------------------------------------------------------
//extends
class Student extends Person {
    constructor(id, name, age, email, city, grade) {
        super(id, name, age, email, city);
        this.grade = grade;
    }

    getGradeInfo() {
        console.log(`${this.name} is in grade ${this.grade}`);
    }
}

const studentAmir = new Student(3, "Amir", 27, "amir@gmail.com", "Chicago", "A");
studentAmir.getGradeInfo();


//----------------------------------------------------------------
//static keyword
class Student1 extends Person {
    constructor(id, name, age, email, city, grade) {
        super(id, name, age, email, city);
        this.grade = grade;
    }

    getGradeInfo() {
        console.log(`${this.name} is in grade ${this.grade}`);
    }

    testMethod() {
        console.log("This is a static method");
    }
}

const studentAmir1 = new Student1(3, "Amir", 27, "amir@gmail.com", "Chicago", "A");

studentAmir1.getGradeInfo();
studentAmir1.testMethod()


//----------------------------------------------------------------
