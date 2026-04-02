//Question- check all multiple in 10
let arr=[10,20,30,35,40,45,65,25]

let ans=arr.every((el)=>{
    return (el%10==0);
})

//Question- min number of array
let min=arr.reduce((min,el)=>{
    if(min<el){
        return min;
    }else{
        return el;
    }
})