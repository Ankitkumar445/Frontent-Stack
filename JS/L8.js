let btn=document.querySelector("#btn");

// btn.onclick = () => {
//     console.log("HANDLER1");
//     let a=25;
//     a++;
//     console.log(a);
// };
// btn.onclick = () => {
//     console.log("HANDLER2");
// }

// btn.onclick = (evt) => {
//     console.log(evt);
//     console.log(evt.type);
//     console.log(evt.target);
//     console.log(evt.clientX,evt.clientY);
// };

btn.addEventListener("click",(evt)=>{
    console.log("button was clicked-handler1");
    // console.log(evt);
    // console.log(evt.type);

});
btn.addEventListener("click",()=>{
    console.log("button was clicked-handler2")

});
const handler3=()=>{
    console.log("button was clicked-handler3")

};
btn.addEventListener("click",()=>{
    console.log("button was clicked-handler4")

});
btn.removeEventListener("click",handler3);


let div=document.querySelector("div");
// div.onmouseover=(evt)=>{
//     console.log("you are inside div");
//     console.log(evt);
//     console.log(evt.type);
//     console.log(evt.target);
//     console.log(evt.clientX,evt.clientY);
// };

//prac

let modebtn=document.querySelector("#mode");
let currMode="light";
let body=document.querySelector("body");
modebtn.addEventListener("click",()=>{
    if(currMode ==="light"){
        currMode="dark";
        body.classList.add("dark");
        body.classList.remove("light");
    }else{
        currMode="light";
        body.classList.add("light");
        body.classList.remove("dark");
    }
    console.log(currMode);

});