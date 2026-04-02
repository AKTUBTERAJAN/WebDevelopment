function poem(){
    console.log("poem poem poem poem poem poem poem poem ");
    console.log("poem poem poem poem poem poem poem poem ");
    console.log("poem poem poem poem poem poem poem poem ");
}

poem();

//Avearge of Three Number

function avg(a,b,c){
    console.log((a+b+c)/3);
}

avg(5,2,3);

//sum of number

function sum(n){
    let sum=0;
    for(let i=1;i<=n;i++){
        sum+=i;
    }
    return sum;
}

//concadanate the array

let str=["hi","hello","bye","!"];
function concadanate(str){
    let result;
    for(let i=0;i<str.length;i++){
        result+= str[i];
    }
    return result;
}