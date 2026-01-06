//promise----->asynchronous data
//promise create
// const p=new Promise((resolve,reject)=>{
//     let isRead=false;
//     if(isRead){
//         resolve("Data found")
//     }
//     else{
//         reject("Data not found")
//     }
// });

// //promise handle
// p.then((data)=>{
//     console.log(data);
// }).catch((err)=>{
//     console.log(err);
// })

// let res =fetch("https://dummyjson.com/products",{
//     method:"GET",

// });
// res
// .then((data)=>{
//     return data.json()
// }).then((data)=>{
//     console.log(data.products);
// })
// .catch((error)=>{
//     console.log(error);
// })

//JSON=javascript object notation(stringify form data storage)
//dumy json ma janney--->for practise








//async-await

// const getproduct=async()=>{
//     let res = await fetch("https://dummyjson.com/products",{
//          method: "GET",

//     });
//     res=await res.json();
//     console.log(res.products);
       
    
// }
// getproduct()






// Common function to fetch products
const fetchProducts = async () => {
  try {
    const res = await fetch("https://dummyjson.com/products");
    const data = await res.json();
    return data.products;
  } catch (error) {
    console.log("Error fetching products:", error);
  }
};

// 1. Function to calculate total quantity of all products
const totalQuantity = async () => {
  const products = await fetchProducts();
  const total = products.reduce((sum, p) => sum + p.stock, 0);
  console.log("1️⃣ Total Quantity of all products:", total);
};

// 2. Function to calculate total price of all products
const totalPrice = async () => {
  const products = await fetchProducts();
  const total = products.reduce(
    (sum, p) => sum + p.price * p.stock,
    0
  );
  console.log("2️⃣ Total Price of all products:", total);
};

// 3. Function to find products with price more than 5000
const priceMoreThan5000 = async () => {
  const products = await fetchProducts();
  const result = products.filter(p => p.price > 5000);
  console.log("3️⃣ Products with price more than 5000:", result);
};

// 4. Function to print the price of product "abc"
const printPriceOfABC = async () => {
  const products = await fetchProducts();
  const product = products.find(
    p => p.title.toLowerCase() === "abc"
  );

  if (product) {
    console.log("4️⃣ Price of abc:", product.price);
  } else {
    console.log("4️⃣ Product 'abc' not found");
  }
};

// 5. Function to calculate total price of product "abc"
const totalPriceOfABC = async () => {
  const products = await fetchProducts();
  const product = products.find(
    p => p.title.toLowerCase() === "abc"
  );

  if (product) {
    console.log(
      "5️⃣ Total price of abc:",
      product.price * product.stock
    );
  } else {
    console.log("5️⃣ Product 'abc' not found");
  }
};

totalQuantity();
totalPrice();
priceMoreThan5000();
printPriceOfABC();
totalPriceOfABC();
