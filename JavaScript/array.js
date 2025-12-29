//Array
//let arr=[1,2,3,4,5,6,7]
//0-6(index)
//7(length)
// console.log(arr.length-1);
// console.log(arr[0]);
// console.log(arr[1]);
// console.log(arr[2]);
// console.log(arr[arr.length-1]);//last index
// let sum=0
// for(let i=0;i<arr.length;i++){
//     // console.log(i);
//     // console.log(arr[i]);
//     sum+=arr[i];

// }
//   console.log(sum);


  //wap a code with will print only even number from given array
//   let arr=[1,2,3,4,5,6,7]
//   for(let i=0;i<arr.length;i++){
//     if(arr[i]%2==0)
//     // console.log(i);
//     // console.log(arr[i]);
//    // sum+=arr[i];
//     console.log(arr[i]);

// }

//    let arr=[1,2,3,4,5,6,7]
//    for(i=arr.length-1;i>=0;i--){
//     console.log(arr[i]);
//    }
// let sum=0;
//   let arr=[1,2,3,4,5,6,7]
//   for(let i=0;i<arr.length;i++){
//     if(arr[i]%2==0){
//    sum+=arr[i];
    
    
//     }
    
// }
// console.log(sum);

//  let arr=[1,2,3,4,5]
//  arr.push(100)
// arr.push(300,211)
// console.log(arr.pop());
// arr.unshift(100,200)
// console.log(arr.shift());
//  console.log(arr);
 
  // let arr=[1,2,3,4,5]
  //slice
  //console.log(arr.slice(1,4));

// let arr=[1,2,3,4,5]
// //Splice
// console.log(arr.splice(1,2,"hello"));
// console.log(arr);

//concat

// let arr=[1,2,3,4,5]
// let arr2=[100,200,300,400,500]
// console.log(arr.concat(arr2));

// forEach
//access and print 
//replacement of for loop
// let arr=[1,2,3,4,5,6,7,8]
// arr.forEach((item,index)=>{
//   console.log("index:"+index+"-"+item);
// })




//Map
//new array returns
//modified existing arry and returns new arra
// let arr=[1,2,3,4,5,6,7,8]
// const newArr=arr.map((item)=>{
//   // return item+100
//   // return item%2

// })
// console.log(newArr);



//filter
// let arr=[1,2,3,4,5,6,7,8]
// const filterItems=arr.filter((item)=>{
//   // return item%2==0
//   // return item%2!=0
//   return item>2
// })
// console.log(filterItems);



// // reduce
// let arr=[1,2,3]
// // reduce
// let totalVal=arr.reduce((acc,item)=>{
//   return acc+item
// },0)
// console.log(totalVal);



//find
let arr=[2,4,5,6,7,55,33,23]
// const i=arr.find((item)=>{
//   return item==6
// })
// console.log(i);

//includess
console.log(arr.includes(1));
console.log(arr.includes(2));
console.log(arr.includes(33));
console.log(arr.includes(4));

