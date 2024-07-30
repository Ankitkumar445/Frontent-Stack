function myfunction(){
    console.log("welcome in india !");
    console.log("we are learning javascript :");
}
myfunction();

// function sum(x,y){
//     console.log(x+y);
// }

function sum(x,y){
    //local variables
    s=x+y;
    return s;
}
let val=sum(10,4);
console.log(val);

//arrow function
function sum1(a,b){
return a+b;
}
const x=5;
const arrowsum=(a,b)=>{
    console.log(a+b);
}

function mul(a,b){
    return a*b;
}
const arrowmul=(a,b)=>{
    console.log(a*b);
}

const printHello=()=>{
    console.log("hello");
}

//practice
function countVowels(str){
    let count=0;
    for(const char of str){
        if(char === "a" || char === "e" || char === "i" || char === "o" || char ==="u") {
            count++;
        }
    }
    return count;
}

const countVow=(str)=>{
    let count=0;
    for(const char of str){
        if(char === "a" || char === "e" || char === "i" || char === "o" || char ==="u") {
            count++;
        }
    }
    return count;
}

let arr=[1,2,3,4,5];
arr.forEach(function printVal(Val){  //value at each index
    console.log(Val);

});

let arr1=["delhi","pune","mumbai"];
arr1.forEach((Val1,idx,arr1)=>{
console.log(Val1.toUpperCase(),idx,arr1);
});


//practice
let nos=[1,2,3,4,5];
let nos1=[6,7,8,9,10];
// nos.forEach((nos) =>{
//     console.log(nos*nos);
nos1.map((Val)=>{
console.log(Val);
});

// });
 let calcSqaue=(nos) =>{
    console.log(nos*nos);
 };
//  nos.forEach(calcSqaue);

//example
let num=[25,85,99,93];
let newArr=num.map((Val1)=>{
return Val1*Val1;
});
console.log(newArr);

//filter
let arr2=[6,7,8,9,10];
let evenarr2=arr2.filter((Val4)=>{
    return Val4 %2===0;
});
console.log(evenarr2);

//reduce
let aary=[1,2,3,4];
const output=aary.reduce((res,curr)=>{
    // return res+curr;
    return res<curr ? res :curr;
});
console.log(output);

//prac

let marks=[64,89,92,56,99,64];
let topers=marks.filter((Val)=>{
return Val>90;
});
console.log(topers);

//prac2
let n=prompt("enter the number :");
let arr4=[];
for(let i=1;i<=n;i++){
    arr4[i-1]=i;
}
console.log(arr4);
let sum9=arr4.reduce((res,curr)=>{
return res+curr;
});
console.log("sum=",sum9);

let fact=arr4.reduce((res,curr)=>{
    return res*curr;
    });
    console.log("factorial=",fact);