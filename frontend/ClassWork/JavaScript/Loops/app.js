console.log("1");
console.log("2");
console.log("3");
console.log("4");
console.log("5");

//for loops 
//let n=prompt("write the numner")
//n=parseInt(n);
for(let i=1;i<=10;i++){
    //console.log(n*i);
    console.log(5*i);
}

//Nested Loops
for(let i=1;i<=3;i++){
    console.log(`outer loop ${i}`);

    for(let j=1;j<=3;j++){
        console.log(j);
    }
}


//while loop
 let i=1;
 while(i<=5){
    console.log(i);
    i++;
 }


 //game
 const favmovie="avtor";

 let guess=prompt(" guess my favmovies");
 while((guess!=favmovie)&&(guess!="quit")){
    guess=prompt("worng guess please try again");
 }

 if(guess==favmovie){
    console.log("congratulaion");
 }else console.log("sucessfully quit");

 //Break keyword
 
