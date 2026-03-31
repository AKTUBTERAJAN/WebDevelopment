//Qusetion - Write a arrow fuction to return a square
const squre=(n)=>n*n;
console.log(squre(4));

//Queston - write a function the print a hello word 5 time
let id=setInterval(()=>{
    console.log("hello word");
},2000);

setTimeout( ()=>{
    clearInterval(id);
    console.log("clear interval");
},10000);