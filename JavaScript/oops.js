//class
//object

// class User {
//     constructor(Name, Age) {
//         this.name = Name;
//         this.age = Age;
//     }
//     walk = () => {
//         console.log("walk");
//     }
//     info = () => {
//         console.log(this.name);
//         console.log(this.age);
//     }
// }
//{
//name:"",
//age:""
// }
// const u1 = new User("Dilliraj", 20)
// u1.walk()
// u1.info()
//const u2=new User("prem",21)
// console.log(u1);
// console.log(u1.name);
//console.log(u2);
//u1={
//name:"Dilliraj",
//age:"2o"
//}

//Inheritance
class Person{
    constructor(name,age){
        this.name=name
        this.age=age
    }

}
class Student extends Person{
    constructor(name,age,faculty){
        super(name,age)
        this.faculty=faculty;
    }
}
class Emp extends Person{
    constructor(name,age,dept){
        super(name,age)
        this.dept=dept;
    }
}
const s1=new Student("dilliraj",20,'BCA') 
console.log(s1);