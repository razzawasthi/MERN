//Object

// let user={
//     [key]:value,
//     [key]:value,
//     [key]:value
// }

// CRUD=create,read,update,delete
// create
// let user={
//     name:"Ram",
//     age:19,
//     isStudent:true
// }
// console.log(user);

// //read(get,fetch)
// console.log(user.name);
// console.log(user.age);
// console.log(user.isStudent);
// console.log(user);
// //delete
// delete user.name
// delete user.age
// 

//Update//add
// let user={
//     name:"Ram",
//     age:19,
//     isStudent:true
// }
// user.phone=9800644320
// user.name="shyam"
// console.log(user);


let user={
    name:"Dilli",
    rollno:20,
    isStudent:true,
    phone:{
        p1:98000489489,
        p2:98494998939
    },
    marks:[24,32,45,66,77],

}
console.log(user.phone.p1);
console.log(user.phone.p2);
const totalValue=user.marks.reduce((acc,item)=>{
    return acc+item;
},0)
console.log(totalValue);



