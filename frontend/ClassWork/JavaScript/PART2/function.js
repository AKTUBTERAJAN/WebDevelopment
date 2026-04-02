function hello(){
    console.log("hello");
}

hello();

function print(){
    console.log("apna college");
    for(let i=0;i<=5;i++){
        console.log(i);
    }
}

print();

//role dice

function dice(){
    let ran=Math.floor(Math.random()*6)+1;
    console.log(ran);
}

dice();

//Function With Argument
function print(name,age){
    console.log(`${name} ${age}`);
}
print("RAJAN",20);

//sum

function sum(a,b){
    console.log(a+b);
}

sum(5,3);

//mutiplication

function muti(n){
    for(let i=1;i<=10;i++){
        console.log(n*i);
    }
}

muti(5);

//Return Function
function sum1(a,b){
    return a+b;
}

let s=sum1(5,7);
console.log(s);

let s1=sum1(sum1(5,7),3);
console.log(s1);


//Function scope
const add=function(a,b){
    return a+b;
}

let hello1=function(){
    console.log("hello");
}

//Higher Order Function
function multiple(func,n){
    for(let i=1;i<=n;i++){
        func();

    }
}

let greet1=function(){
    console.log("hello");
}

multiple(greet1,2);

//Retrun a function
function oddEven(request){
    if(request=="odd"){
        let odd= function(n){
            console.log(!(n%2==0));
        }
        return odd;
    }else if(request=="even"){
        let even= function(n){
            console.log((n%2==0));
        }
        return even;
    }else{
        console.log( "wrong answer");
    }
}


//Method 
const calculate={

    add(a,b){
        return a+b;
    },
     sub(a,b){
        return a-b;
    },
     mul:function(a,b){
        return a*b;
    }
};



