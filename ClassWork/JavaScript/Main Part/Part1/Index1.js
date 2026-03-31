// // let p=document.querySelector("p");

// // p.addEventListener("click",function(){
// //     console.log("parah was clicked");
// // });

// // let box=document.querySelector(".box");
// // box.addEventListener("mouseenter",function(){
// //     console.log("mouse inside div");
// // });

// let btn=document.querySelector("button");
// // let p=document.querySelector("p");
// // let h1=document.querySelector("h1");
// // let h3=document.querySelector("h3");

// // function changeColor(){
// //      console.log("this.innerText");
// //     this.style.background="blue";
// // }

// btn.addEventListener("click",function(event){
//     console.log(event);
//     console.log("button clicked");
// });

// // p.addEventListener("click",changeColor);

// // h1.addEventListener("click",changeColor);

// // h3.addEventListener("click",changeColor);

// btn.addEventListener("dblclick",function(event){
//     console.log(event);
//     console.log("button clicked");
// });


// let inp=document.querySelector("input");

// inp.addEventListener("keydown",function(event){
//     console.log("code=",event.code);
//     if(event.code=="ArrowUp"){
//         console.log("character moves forward");}
//     else if(event.code=="ArrowDown"){
//         console.log("character moves backword")
//     }else if(event.code=="ArrowLeft"){
//         console.log("character moves left")
//     }else if(event.code=="ArrowRight"){
//         console.log("character moves right")
//     }
// });

// inp.addEventListener("keyup",function(){
//     console.log("key was released");
// })

 let form =document.querySelector("form");

 form.addEventListener("submit",function(event){
   event.preventDefault();
//     let inp=document.querySelector("input");
//     console.dir(inp.value);

//     let user=this.elements[0]; 
//     let pass=this.elements[1];

//     console.log(user.value);
//     console.log(pass.value);

//     alert(`Hi ${user.value}, your password is set to ${pass.value}`);
    //let inp=document.querySelector("input");
    // let user=document.querySelector("#user");
    // let password=document.querySelector("#pass");

    // console.log(user.value);
    // console.log(password.value);
    
    // console.dir(inp);
    // console.log(inp.innerText);
    // console.log(inp.value);

    // alert(`hi ${user.value},your password is set to ${pass.value}`);
});

//change event

let user=document.querySelector("#user");

user.addEventListener("change",function(){
    console.log("change event");
    console.log("final value = ",user.value);

});

user.addEventListener("change",function(){
    console.log("input event");
    console.log("final value = ",user.value);

});