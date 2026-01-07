
// event
//eventHandler
// event addEventListener


// const myfunc=()=>{
//     alert("myfunc")
// // }
// const btn=document.querySelector('#btn')
// btn.addEventListener('click',()=>{
//     alert("AddEventLIstenr")
// })
// btn.addEventListener('click',()=>{
//     btn.style.color='blue'
// })
// btn.addEventListener('mouseover',()=>{
//     alert("AddEventLIstenr")
// })
// btn.removeEventListener('mouseover',()=>{
//     alert("AddEventLIstenr")
// })



const btn = document.querySelector("#btn");
const first = document.querySelector(".first");

let isTrue = true;
btn.addEventListener("click", () => {
  if (isTrue) {
    first.style.backgroundColor = "black";
    first.style.color = "white";
    btn.innerText = "change color to white";
    isTrue = false;
  } else {
    first.style.backgroundColor = "white";
    first.style.color = "black";
    btn.innerText = "change color to black";
    isTrue = true;
  }
});

