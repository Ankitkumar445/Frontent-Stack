// console.log("one");
// console.log("two");
// setTimeout(()=>{
//     console.log("hello");
// }, 2000);

console.log("three");
console.log("four");

function sum(a,b){
    console.log(a+b);
}
function calculator(a,b,sumCallback){
    sumCallback(a,b);
}
// calculator(1,2,sum);
 calculator (1, 2, (a,b) => {
    console.log(a+b);
 });

//way two
//  const hello=()=>{
//     console.log("hello");
//  };
//  setTimeout(hello,2000);

 //nesting

 for (let i=0;i<5;i++){
    let str="";
    for(let j=0;j<5;j++){
        str=str+j;
    }
    console.log(i,str);
 };


 let age=80;
 if(age>=18){
    if(age>=60){
        console.log("senior");
    }else{
        console.log("middle");
    }
}else{
    console.log("child");
}

function getData(dataId){
    // console.log("data",dataId);
    setTimeout(()=>{
        console.log("data",dataId);
    },2000);
};

//My understanding but not executed
// function getData(data1){
//     // console.log("data",dataId);
//     setTimeout(()=>{
//         console.log("data",data1);
//     },1000);
//     setTimeout(()=>{
//         console.log("data",data2);
//     },2000);
//     setTimeout(()=>{
//         console.log("data",data3);
//     },3000);
// };

function getData(dataId,getNextData){
    setTimeout(()=>{
        console.log("data",dataId);
        if(getNextData){
        getNextData();
        }
    },1000);
};

// getData(1,()=>{
//     console.log("getting data2.........");
//     getData(2,()=>{
//         console.log("getting data3.........");
//     getData(3);
//     });
// });

//promise
// let promise=new Promise((resolve,reject)=>{  
//     console.log("making a promise");
//     // reject("some error occured");
//     resolve("success");
// });

// function getData(dataId,getNextData){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             console.log("data",dataId);
//             // resolve("success");
//             reject("error");
//             if(getNextData){
//             getNextData();
//             }
//         },5000);
//     });

// };

// const getPromise=()=>{
//     return new Promise((resolve,reject)=>{  
//         console.log("making a promise");
//       reject("some network error occured!");
//     // resolve("success"); 
//  });
// };
// let promise=getPromise();
// promise.then((res)=>{
//     console.log("promise fulfilled",res);
// });

// promise.catch((err)=>{
//     console.log("rejected",err);

// });

// function asyncFunc1(){
//     return new Promise((resolve,reject)=>{  
//         setTimeout(()=>{
//             console.log("some data");
//             resolve("success");
//         },4000);
//         });
// };

// function asyncFunc2(){
//     return new Promise((resolve,reject)=>{  
//         setTimeout(()=>{
//             console.log("some data");
//             resolve("success");
//         },4000);
//         });
// };
// console.log("fetcing data1...........")
// asyncFunc1().then((res)=>{
//     console.log("fetching data2...........");
//     asyncFunc2().then((res)=>{});
// });

// 


//promise chain
// getData(1).then((res)=>{
//     console.log(res);
//     getData(2).then(()=>{
//         console.log(res);
//     });
// });

//  getData(1)
//  .then((res)=>{
//     return getData(2);
//  })
//  .then((res)=>{
//     return getData(3);
//  })
//  .then((res)=>{
//     console.log("success");
//  });

 //async-await

//  async function hello(){
//     console.log("Ooa");
//  }
// function api(){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             console.log("weather data");
//             resolve(200);
//         },2000);
//     });
// };

// async function getweatherData(){
//     await api();
//     await api();
// }


function getData(dataId){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log("data",dataId);
            resolve("success");
        },2000);
    });
};

async function getAllData(){
    console.log("getting data1........");
    await getData(1);
    console.log("getting data2........");
    await getData(2);
    console.log("getting data3........");
    await getData(3);
    console.log("getting data4.......");
    await getData(4);
    console.log("getting data5........");
    await getData(5);
}

(async function (){
    console.log("getting data1........");
    await getData(1);
    console.log("getting data2........");
    await getData(2);
    console.log("getting data3........");
    await getData(3);
    console.log("getting data4.......");
    await getData(4);
    console.log("getting data5........");
    await getData(5);
})();