// // console.log("Hello, World!");
// // alert("This is a sample JavaScript file.");
// // document.writeln("This is a sample JavaScript file.");
// // username=prompt("Enter your name: ");
// // console.log("User's name is: " + username);
// // document.writeln("User's name is: " + username);
// // alert("Welcome, " + username + "!");
// // console.log("hello dilli");


// //----------->variable rules--------->\\
// // val=10
// // console.log(val)
// //fullName
// //full_name
// //1num=10    //not allowed
// //num1=100;
// //nu1m=100;
// //$num=20;
// //_name="ram"

// //------->Data Type--->
// //1.Premitive DataType
// //------>a.String
// //fullName='Dilliraj'
// //fullName="Dilliraj"
// //fullName=`Dillirja
// //awasthi`;
// //console.log(typeof fullName);

//     //-->b.Number
// //num=10
// //num=10.2
// //num=11.22222
// //console.log(typeof num)
// //console.log(num);


// //--->c.Boolen
// //true and false
// //isAdmin=false
// //console.log(typeof isAdmin)

// //-->c.Undefined
// //var num=null //empty
// //console.log(num);
// //console.log(typeof num)

// //--->d.Null
//  //var num;//empty
//  //console.log(num);

//  //--->e.BigInt

// //  var num=1234567899999999999999999n
// //  var num=BigInt(1234567899999999999999999n)
// //  console.log(typeof num)

//  //-->e.Symbol
//  //var a=10
//  //var b=10
//  //console.log(a==b)
//  //var id1=Symbol("ram")
//  //var id2=Symbol("ram")
//  //console.log(id1==id2)
//  //console.log(typeof id1)

//  //Non-Primitive
//  //Object
// //    var user={
// //     name:"ram",
// //     age:10
// //    }
// //  var user1={
// //     name:"ram",
// //     age:10
// //    }
// //    console.log(typeof user)

//  //array
// //  //const arr=[1,2,3,4,5,6,7]
// //  console.log(arr)
// //  console.log(typeof arr)
// //  console.log(arr[0])
// //  console.log(arr[1])
// //  //arr={
//  //0:1,
//  //1:2,
//  //
//  //}

//  //function
//  function add(){
//   console.log("add")
//  }
//  add()
//  console.log("add")
//  console.log(typeof add)
 
 
 
//  //Date
//  var date=new Date()
//  console.log(date)
//  console.log(typeof date)



// //  var const let

// // var a=100
// // var a=200
// // a=300 
// // console.log(a)
// //   Global Scope
// // var x=10
// // {
// //   console.log(x)
// //   var x=100
// // }
// // console.log(x)

//  //const
// // const d=100
// // console.log(d)
// // {
// //   const d=200
// //   const d=300
// //   console.log(d)
// // }

// // let
// // let x=100
// // x=150
// // {
// //   let b=100
// //   console.log(a)
// // }
// // console.log(a)

// //Hoisting
// // console.log(a)
// // var a=10

// //let and const doesn't exit hoisting
// // console.log(a)
// // const a=4


// //Operators
// // 1.Arthmetic operator
// // +,-,/,*,%,**,++,--
// // console.log(20+10)
// // console.log(20-10)
// // console.log(20/10)
// // console.log(20*10)
// // console.log(20%10)
// // console.log(2**3)


// // let x=10
// // // console.log(x++)
// // // console.log(x)
// // // console.log(x--);
// // // console.log(x);
// // //console.log(++x);
// // console.log(--x);


// // //Assignment Operator
// // //=,+=,-=,/=,*=,%=,**=
// // let x=10
// // x+=5
// // console.log(x);
// // x-=5
// // console.log(x);
// // x/=5
// // console.log(x);
// // x*=5
// // console.log(x);
// // x**=5
// // console.log(x);
// // x%=5
// // console.log(x);

// //Comperasion Operator(true /false)
// // ==,===,>,<,>=,<=,!=,!==
// // let s=2
// // let v=2
// // console.log(s==v);
// // console.log(s===v);
// // console.log(s>v);
// // console.log(s<v);
// // console.log(s>=v);
// // console.log(s<=v);
// // console.log(s!=v);
// // console.log(s!==v);

// //Logical Operator(true /false)
// //and &&
// //cond1 && cond2
// // true && true=true
// //true && false=fasle
// //false && true=fasle
// //false&& false=fasle


// //cond1 || cond2
// //true || true=true
// //true || false=true
// //false || true=true
// //false || false=false

// // //Not !
// // let isAdmin=true
// // console.log(!isAdmin);

// //type Casting

// // console.log(true+1);
// // console.log(false+true+1);
// // console.log(false+"hi"+1+true);
// // console.log(false+1+true+"hi");

// // //String to Number
// //  let num="10"
// //  console.log(typeof num);
// //  num=Number(num)
// //  //num=parseInt(num)
// //  console.log(typeof num);

// //  let num=98888
// //  console.log(typeof num);
// //  num=String(num)
// //  console.log(typeof num);

// //string or number,empty to boolen
// // let x="hi"
// // console.log(Boolean(x))

// //0,null undefined,epty,false=false


// // //if_else
// // if(true){
// //     console.log("if");
// // }
// // else{
// //     console.log("else");
// // }
// //   let age=30
// //   if(age>50){
// //     console.log(old);
// //   }
// //   else{
// //     console.log("child");
// //   }

// //elseif


// //Switch_Case

let char="A"
switch(char){
    case"A":
    {
        console.log("A");
        break;
    }
    case"B":
    {
        console.log("B");
        break;
    }
    case"C":
    {
        console.log("C");
        break;
    }
    case"D":
    {
        console.log("D");
        break;
    }
    case"E":
    {
        console.log("E");
        break;
    }
    case"F":
    {
        console.log("F");
        break;
    }
    default:
    {
        console.log("Default");
    }
}
// // //to run javascript file in vs code 
// // type node -- watch File.js














