for(let c=1;c<=5;c++){
    console.log("hello ankit");
}
console.log("lops has ended");

let sum=0;
for(let i=1;i<=5;i++){
    sum=sum+i;
}
console.log("sum =",sum);
console.log("lops has ended");

// for(let i=1;i<=5;i++){
//     console.log("i =",i);
// }

//  console.log(i);

//while loop
let i=1;
while(i<=10){
    console.log("ankit");
    i++;
}

//for-of loop
let str="akr6j4556yj456yj4s";
for(let i of str){
    console.log("i=",i);
}

//for-in loop
let child={
    name:"aman kumar",
    age:44,
    cgpa:6.9,
    isPass:true,
};
for(let key in child){
    console.log("key=",key, "value=",child[key]);

}

//all even no bet 1 to 100

for(let en=0;en<=100;en++){
   if(en%2===0){
    console.log("even number=",en);
   }else{
    
   }
}

//game number
// let Gn=25;
// let Un=prompt("enter number");
// while(Un!=Gn){
//     Un=prompt("you enter the wrong number,Guess again :")
// }
// console.log("you entered the right number");

//string

let str1="dj wale";
let str2="\tankit";
console.log(str1);
console.log(str2[4]);
// console.log(str1+ str2[4]);
let res=str1.concat(str2);
console.log(res);

//Template literals

let specialString =`This is a Template Literal\n${1+2-6}`;
console.log(specialString)
console.log(typeof specialString);

// let obj={
//     item:"pencil",
//     price:5,
// };
// let output=`the cost of ${obj.item} is ${obj.price} rupees`;
// console.log(output);
// console.log("the cost of",obj.item,"is",obj.price,"rupees");
let str4="aditya";
let newstr4=str4.toUpperCase();
console.log(str4);
console.log(newstr4);

let str5="ayush";
console.log(str5.slice(1,3));
console.log(str5.replace("h","hi"));
console.log(str5.charAt(3));

let p=prompt("enter your user name");
let username="@"+p+p.length;
console.log(username);
