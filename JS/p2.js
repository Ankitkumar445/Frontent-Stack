let newBtn=document.createElement("button");
newBtn.innerText="click me!";

newBtn.style.color="white";
newBtn.style.backgroundColor="red";

document.querySelector("body").prepend(newBtn);

//q2
let para=document.querySelector("p");
//  console.log(para);
// document.createElement("class");
// console.log(para.getAttribute("class"));
// console.log(para.setAttribute("class","newclass"));
console.log(para.classList);
console.log(para.classList.add("newclass"));
console.log(para.classList);

