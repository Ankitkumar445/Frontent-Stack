const student={
    fullName:"ankit kumar choudhary",
    marks:85.4,
    printMarks:function () {
        console.log("mark =",this.marks);
    },
};

const employee={
    calcTax(){
        console.log("tax rate is 10%");
    },
};
const karn={
    salary:5000,
};
const karn1={
    salary:8000,
};
const karn2={
    salary:10000,
};
const karn3={
    salary:9200,
};
const karn4={
    salary:7900,
};
karn.__proto__=employee;
karn1.__proto__=employee;
karn2.__proto__=employee;
karn3.__proto__=employee;


const worker={
    calcTax(){
        console.log("tax rate is 20%");
    },
};
const arjun = {
    salary:45000,
    calcTax(){
        console.log("tax rate is 40%");
    },
};

arjun.__proto__=worker;

class HundaiCar{
    constructor(brand,mileage){
        console.log("creating new objects");
        this.brand=brand;
        this.mileage=mileage;
    }
    start () {
        console.log("start")
    }
    stop () {
        console.log("stop");
    }
    // setBrand(brand){
    //     this.brand=brand;
    // }
}

let fortuner=new HundaiCar("fortuner",10);
// fortuner.setBrand("fortuner");
console.log(fortuner);
let suzuki=new HundaiCar("suzuki", 14);
// suzuki.setBrand("suzuki");
console.log(suzuki);

//inheritance
class Parent {
    hello(){
        console.log("hello");
    }
}
class Child extends Parent {}
    let obj=new Child();


//example

class Person{
    constructor(name){
        this.name=name;
        this.species="clever among all species";
    }
    eat(){
        console.log("eat");
    }
    sleep(){
        console.log("sleep");
    }
}

   class Engineer extends Person{
    constructor(branch){
        super(name);
        this.branch=branch;
    }
    work(){
        console.log("solve problems,building something");
    }
   }

   let engObj=new Engineer("ankit");

   //practice
let data="secret info";
   class User{
    constructor(name,email){
        this.name=name;
        this.email=email;
    }
    viewData(){
        console.log("data =",data);
    }
   }
   let student1=new User("ankit","ankhd.sddf@gmail.com");
   let student2=new User("sachin","ad.sddf@gmail.com");
