let arr=[1,2,3,4,5,6];
//arrow function
arr.forEach( (el)=>{
    console.log(el);
})


arr.forEach(function(el){
    console.log(el);
});
// let print=function(el){
//     console.log(el);
// }

// arr.forEach(print);


//Array of object
let arr1=[{
    name:"Rajan",
    Marks:94,
},{
    name:"Raj",
    Marks:95,
},{
    name:"Raja",
    Marks:96,
}]
let gpa=arr1.map((el)=>{
    return el.Marks/10;
});

arr1.forEach((arr1)=>{
    console.log(arr1.Marks)
})


//map function
let num=[1,2,3,4]

let double=num.map((el)=>{
    return el*2;
});


//filter 

let nums=[1,2,3,4,5,6,5,7,8,6,2,2,4,5,8,3,4,11,6,8]
let ans=nums.filter((el)=>{
    console.log("even number");
    return el%2==0;
});

//reduce method
let final=num.reduce((res,el)=>(res+el));


//maximum of array
let max=nums.reduce((max,el)=>{
    if(max<el){
        return el;
    }else{
        return max;
    }
});


//default pairameter
function sum(a,b=3){
    return a+b;
}

//Spred

console.log(..."Rajan");
console.log(...nums);

let newnums=[...nums];
console.log(newnums)
newnums.push(5)


//object literls through Spread
    let data={
        email:"raj@gmail,com",
        Passwor:"1234"
    }
let datacopy={...data,id:123}

let arr12=[1,2,3,4];
let obj1={...arr12};



