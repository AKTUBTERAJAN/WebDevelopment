let gameseq=[];
let useseq=[];

let btns=["yellow","red","purple","green"]

let started=false;
let level=0;

let h2 = document.querySelector("h2");

document.addEventListener("keypress",function(){
    if(started==false){
        console.log("game is started");
        started=true;

        levelup();
    }
})

function gameFlash(btn){
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash");
    },250);
}
function userFlash(btn){
    btn.classList.add("userflash");
    setTimeout(function(){
        btn.classList.remove("userflash");
    },250);
}

function levelup(){
    level++;
    h2.innerText =`Level ${level}`;
    
    let ranIdx=Math.floor(Math.random()*3);
    let ramCol=btns[ranIdx];
    let ranBtn=document.querySelector(`.${ramCol}`);
    // console.log(ranIdx);
    // console.log(ramCol);
    // console.log(ranBtn);
    //random buttom
    gameseq.push(ramCol);
    console.log(gameseq);
    gameFlash(ranBtn);
}

function checkAns(idx){
   // console.log("curr level : ",level);
   let idx=level-1;

   if(useseq[idx]===gameseq[idx]){
        if(useseq.length==gameseq){
            levelup();
        }
   }else{
    h2.innerText=`Game Over! Press any key to start`;
   }
}
function btnPress(){
    console.log(this);
    let btn=this;
    userFlash(btn);

    usercol=btn.getAttribute("id");
    useseq.push(usercol);

    checkAns(useseq.length-1);
}

let allbtns=document.querySelectorAll(".btn");
for(btn of allbtns){
    btn.addEventListener("click",btnPress);
}