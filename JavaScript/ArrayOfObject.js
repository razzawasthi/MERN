const products = [
  {
    id: 1,
    name: "abc",
    price: 2000,
    quantity: 10,
  },
  {
    id: 2,
    name: "mno",
    price: 4000,
    quantity: 20,
  },
  {
    id: 3,
    name: "xyz",
    price: 5000,
    quantity: 100,
  },
  {
    id: 4,
    name: "pqr",
    price: 30000,
    quantity: 200,
  },
  {
    id: 5,
    name: "iphone",
    price: 90000,
    quantity: 7000,
  },
];
// console.log(products[0].name)
// console.log(products[1].name)
// console.log(products[0].price)
// console.log(products[0].id)

// products.forEach((item) => {
//   console.log(item.name);
//   console.log(item.price);
//   console.log(item.id);
// });
//1.wrt a function that will calculate the total number of quantity of all product(reduce)
const totalQty=products.reduce((acc,item)=>{
    return acc+item.quantity;
    },0)
console.log(totalQty);
//wrt a function that will calculate the total price of all product(reduce)
const totalPrice=products.reduce((acc,item)=>{
    return acc+item.price;
    },0)
console.log(totalPrice);
//3. wrt a function that will find out more  than 5000 product price(filter)

//4. wrt a function that will  print the price of iphone.(find)
//5. wrt a function that will  calculate  the total  price of iphone.(find)
let mobile=products.find(()=>{
    return item.name=="iphone";

})
console.log(mobile);
console.log(mobile.price*mobile.quantity);