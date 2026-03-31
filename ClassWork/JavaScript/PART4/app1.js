//Rest concept
function sum(...args){
    for(let i=0;i<args.length;i++){
        console.log("you gave us",args);
    }
}

function min(a,b,c,d){
    console.log(arguments)
    console.log(arguments.length);
    console.log(arguments.push);
}

function sum1(...args){
  return args.reduce((sum1,el)=>sum1+el);
    
}

//Destruturing
let names=["ram","syam","mohan","mohan"];
let[winner,runnerup,...others]=names;
console.log(winner,runnerup,others);