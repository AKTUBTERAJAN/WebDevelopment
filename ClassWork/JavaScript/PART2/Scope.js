//function scope 
let sum=54; // globle sum
function calsum(a,b){
    let sum =a+b; //function scope *
    console.log(sum);
}

calsum(1,5);

//Block Scope
{
    let a=25;
    console.log(a);//block scope
}

//Lexical Scope
function outer(){
    let x=5;
    let y=6;

    function inner(){
        console.log(x);
        console.log(y);
    }
    inner();
}


