let btn=document.querySelectorAll("button");
// console.dir(btn);
for(btn of btn){
    // btn.onclick=sayHello;
    // btn.onclick=sayName;
   
    // btn.onmouseenter=function(){
    //     console.log("You entered a button");
    // }
    // console.dir(btn);

    // btn.addEventListener("click",sayHello);
    // btn.addEventListener("click",sayName);
    btn.addEventListener("dblclick",function(){
        console.log("you double click me");
    });
}



// btn.onclick=function(){
//     alert("button was clicked");
// };

function sayHello(){
    alert("Hello!");
}


function sayName(){
    alert("Rajan");
}

// btn.onclick=sayHello;