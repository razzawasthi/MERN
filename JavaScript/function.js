// // // // //function
// // // // function addTwo(){
// // // //     console.log("addTwo");
// // // //     return 1
// // // // }
// // // // addTwo()
// // // //let x=addTwo()
// // // //console.log(addTwo());
// // // // function add(a,b,c){
// // // //     return a+b+c;
// // // // }
// // // // let sum=add(4,5,6)
// // // // let sum1=add(100,300,400)
// // // // console.log(sum);
// // // // console.log(sum1);


// // // function sub(a,b,){
// // //     return a-b;
// // // }
// // // let Difference=sub(9,3)
// // // console.log(Difference);

// // // function mul(a,b){
// // //     return a*b;
// // // }
// // // let Multiply=mul(2,3)
// // // console.log(Multiply);

// // // function div(a,b){
// // //     return a/b;
// // // }
// // // let Divison=div(2,3)
// // // console.log(Divison);

// // // function tell(a){
// // //     if(a%2==0){
// // //         console.log("even");
// // // }
// // // else{
// // //     console.log("odd");
// // // }
// // // }
// // // tell(33);


// // // function print(num){
// // //     for(i=1;i<=num;i++){
// // //         console.log(i);
// // //     }

// // // }
// // // print(9)
// // //event number from 1 to nth

// // // function printEven(n){
// // //     for(i=1;i<=n;i++){
// // //         if(i%2==0){
// // //             console.log(i);
// // //         }
       
// // //     }
// // // }
// // // printEven(20)

// // // let sum=0
// // // function sumOfEven(n){
// // //     for(i=0;i<=n;i++){
// // //         if(i%2==0){
// // //             //sum+=i;
// // //             sum=sum+i;           
// // //     }
    
// // //     }
// // //     console.log(sum);
// // // }
// // // sumOfEven(20)

// // //factorial
// // // let fac=1
// // // function fact(n){
// // //  for(i=1;i<=n;i++){
// // //     fac*=i;
// // //  }
// // //  console.log(fac);
// // // }
// // // fact(7)


// // // function checkPrime(num){
// // //     if(num<=1){
// // //         return false;
// // //     }
// // //     for (let i = 2; i < num; i++) {
// // //     if (num % i === 0) {
// // //       console.log(i); 
// // //     }
// // //   }
 

// // //   return true;

// // // }
// // // checkPrime(15)
// // // function isPrime(num){
// // //     if(num<=0||num==1){
// // //         console.log("not prime");
// // //     }
// // //     let prime=true
// // //     for(let i=2;i<num;i++){
// // //         if(num%i==0){
// // //             prime=false;
// // //             break;
// // //         }
// // //     }
// // //     if(prime){
// // //         console.log("prime");
// // //     }
// // //     else{
// // //         console.log("Not prime");
// // //     }
// // // }
// // // isPrime(3.00)

// // //Type of function
// // //1.Named function
// // //2.Arrow function
// // // function add(){

// // // }

// // //2.Arrow function
// // // const add=()=>{
// // //     console.log("add");
// // // }
// // // add()

// // // const add=(a,b)=>{
// // //     console.log(a+b);
// // //     return a+b;
// // // };
// // // add(2,4)

// // // const add=(x,y)=>x+y;
// // // console.log(add(2,4));

// // //const add=a=>a+5;
// // //console.log(add(2));


// // //imidetly invoke function 
// // (function(){
// //     console.log("Hello");
// // })()

// // //inner function
// // function outer(){
// //     function inner(){
// //     console.log("inner");
// // }
// // return inner
// // }
// // const inner=outer();
// // inner()


// //CallBack function
// // //const first=()=>{
// //    console.log("first"); }
// //  const second =(f,x)=>{
// //     f(x);
// //     console.log("second");
// //  };
// //  second(
// //     (a)=>{
// //         console.log("first",a);
// //     },100);
//     // wap  a function that accept a function a number
//     //  and pass that number to callback function which will identify the given number is odd or even.
    
//     const outer=(fx,num)=>{
//         fx(num);

//     }
// outer((n)=>{
//     if(n%2==0){
//         console.log("even");
//     }
//     else{
//         console.log("odd");
//     }

//     },103
// )

//Anomious function
// setInterval(()=>{
//     console.log("setInterval");
// },10)


// default parameter function
const add=(x,y=1)=>{
console.log(x,y);
};
add(100,200)