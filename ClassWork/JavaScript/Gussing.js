const max=prompt("enter the max number");


const ramdom=Math.floor(Math.random() * max)+1;
console.log(ramdom);

let Guess=prompt("Guess The Number ");
    while(true){
        if(Guess=="quit"){
            console.log("user quit");
            break;
        }
        else{
            if(Guess==ramdom){
                console.log("your are write");
                break;
            }
            else if(Guess<ramdom){
                Guess=prompt("Your Guess is small,Please Try Again")
            }
            
            else{
                Guess=prompt("Your guess is large,Please Try Again");
            }
        }
    }
