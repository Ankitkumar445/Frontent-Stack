// let div=document.querySelector("div");
// console.log(div);

// let id=div.getAttribute("id");
// console.log(id);

// let name=div.getAttribute("name");
// console.log(name);

// let para=document.querySelector("p");
// // console.log(para.getAttribute("class"));
// console.log(para.setAttribute("class","newClass"));

// let div1=document.querySelector("div");
// // div.style.visibility="hidden";
// div.style.backgroundColor="green";
// div.style.fontSize="28px";
// div.innerText="heee";

let newBtn=document.createElement("button");
newBtn.innerText="click me!";
console.log(newBtn);

let div=document.querySelector("div");
// div.append(newBtn);
// div.prepend(newBtn);
// div.before(newBtn);
div.after(newBtn);

let p=document.querySelector("p");
p.after(newBtn);
let newHeading=document.createElement("h1");
newHeading.innerHTML="<i>Hi,I am Jarvis</i>";
document.querySelector("body").prepend(newHeading);

let para=document.querySelector("p");
para.remove();