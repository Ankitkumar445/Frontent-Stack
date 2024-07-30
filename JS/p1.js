let h2=document.querySelector("h2");
console.dir(h2.innerText);
h2.innerText=h2.innerText+" It's Ankit learning";

let div=document.querySelectorAll(".box");
console.log(div);
console.log(div[0]);
for(div of div){
    console.log(div.innerText);
}


let divs=document.querySelectorAll(".box");
let idx=1;
for(div of divs){
    div.innerText=`new div value ${idx}`;
    idx++;
}
// divs[0].innerText="new unique value 1";
// divs[1].innerText="new unique value 2";
// divs[2].innerText="new unique value 3";
// console.log(div.innerText);