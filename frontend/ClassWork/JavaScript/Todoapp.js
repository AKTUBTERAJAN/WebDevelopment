console.log("Tudo App")
let tudo=[];
let req=prompt("Plese enter a request");
while(true){
    if(req=="quit"){
        console.log("quiting app");
        break;
    }

    if(req="list"){
        console.log("----------------------------");
        for(task of tudo){
            console.log(task);
        }
        console.log("----------------------------")
    
    }else if(req=="add"){
       let task= prompt("Please enter the Tak you want to add")
       tudo.push(task);
       console.log("task added");
    }
    req=prompt
} 

