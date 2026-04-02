const student={
    name:"Rajan",
    age:23,
    eng:73,
    math:73,
    phy:73,

    getAvg(){
        let avg=(this.eng+this.math+this.phy)/3;
        console.log(avg);
    }
}

//Try and Catch Stattement

console.log("hello");
console.log("hello");
console.log("hello");
console.log("hello");
console.log("hello");
try{
console.log(a);
}catch(e){
console.log("find error");
}
console.log("hello");
console.log("hello");
console.log("hello");


//Arrow Function

const Sum=(a,b) =>{console.log(a+b);}
const cube=(a) =>{console.log(a*a*a);}

    //implicit Retrun
    const mul1=(a,b)=>a*b;
    const Sum1=(a,b)=>a+b;


//Set Time Out Function
console.log("hi this!");

setTimeout(()=>{
    console.log("Apna college");},4000);
console.log("welcome to");
console.log("welcome to");
console.log("welcome to");
console.log("welcome to");
console.log("welcome to");
console.log("welcome to");


//Set Interval
    // setInterval( ()=> {
    //     console.log("Apna college")
    // },2000)

//


const student1={
    name:"Rajan",
    marks:95,
    prop:this,
    getName:function(){
        console.log(this);
        return this.name
    },
    getMarks:()=>{
        console.log(this);
        return this.name;
    },

    getInfo1:function(){
        setTimeout( ()=>{
            console.log(this)//student
        },20000);
    },

    getInfo2:function(){
        setTimeout( function(){
            console.log(this)//window
        },20000);
    },
};

const a=5;//global scope
