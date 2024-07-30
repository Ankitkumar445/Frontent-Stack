let a =5;
let b=2;
console.log("a-b=",a-b);
console.log("a*b=",a*b);
console.log("a**b=",a**b);
console.log("a=",a," & b=",b);
a++;
console.log(a);
a+=4;
console.log(a);
console.log("5!=2",a!=b);
let c=6;
let d="6";
console.log("c==d",c==d);
console.log("c===d",c===d);
console.log("a<b",a<b);
// let cond1=a>b;
// let cond2=a===4;
// console.log("cond1 && cond2 =",cond1 && cond2);
console.log("cond1 && cond2 =",a>b && a===4);

//conditional statements
let age=26;
if(age=>18){
    console.log("you can vote ")
}else{
    console.log("you cannot vote");
}
let mode="light";
let color;
if(mode==="dark"){
    color="black"
}else{
    color="white";
}
// if(mode==="light"){
//     color="white";
// }
console.log(color);

//odd or even 
let n=41;
if(n%2===0){
    console.log(n,"is even");
} else{
    console.log(n,"is odd");
}
//ternary operator
let result =age>18?"adult":"not adult";
console.log(result);

//new thing
// alert("hello!");//one time pop up 

// let me=prompt("hekk!");
// console.log(me);

// let no=prompt("enter a number");
// if(no%3==0){
//     console.log(no,"is multiple by 3 ");
// }else{
//     console.log(no,"is not multiple by 3 ");
// }

//Q
let scores=prompt("enter marks");
if(scores>=90 && scores<=100){
    console.log(scores,"A");
}
else if(scores>=70 && scores<=89){
    console.log(scores,"B");
}
else if(scores>=60 && scores<=69){
    console.log(scores,"C");
}
else if(scores>=50 && scores<=100){
    console.log(scores,"D");
}
else if(scores>=0 && scores<=49){
    console.log(scores,"E");
}
console.log(scores);
