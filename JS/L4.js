let marks=[54,88,69,99,85,65];
console.log(marks);
console.log(marks.length);
let heros=["iron","super","spider","wanda"];
console.log(heros);

for(let i=0;i<heros.length;i++){
    console.log(heros[i]);
}
for(let hero of heros){
    console.log(hero);
}

let cities=["delhi","banglore","hydrabad","punsia","jajpur"];
for(let city of cities ){
    console.log(city.toUpperCase());
}

//practice

let mos=[85,97,44,37,76,60];
let sum=0;
for(let val of marks){
    sum+=val;
}
let avg=sum/mos.length;
console.log(`average of marks=${avg}`);

//p2
let items=[250,645,300,900,50];
let i=0;
for(let val of items){
    // console.log(`value of index=${val}`);
    let offer=val/10;
    items[i]=items[i]-offer;
    console.log(`value after offer= ${items[i]}`);
    i++;
}
//array method
let foodItems=["potato","tomato","ginger"];
console.log(foodItems);
foodItems.push("burger","kurkare");
console.log(foodItems);
let delectedItems=foodItems.pop();
console.log(foodItems);
console.log("deleted",delectedItems);
console.log(foodItems.toString());

//concat
let marwel_h=["thor","iron","spider","antman","doctor strange"];
let dc_h=["superman","batman"];
let hm=marwel_h.concat(dc_h);
console.log(hm);

let mh=marwel_h.shift();
console.log("deleted",mh);
console.log(marwel_h);
console.log(marwel_h.slice(1,3));

let array=[1,2,3,4,5,6];
array.splice(2,2,101,102);

//add element
array.splice(1,0,123,2343);

//delete
array.splice(2,1);

//replace
array.splice(2,1,222);

//practice
let bb=["bloomberg","microsoft","uber","google","ibm","Netflix"];
bb.shift();
// bb.splice(1,1);
bb.splice(2,1,"Ola");
// bb.slice("amazon");
bb.push("Amazon");