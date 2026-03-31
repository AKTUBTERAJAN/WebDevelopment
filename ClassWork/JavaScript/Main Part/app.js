// let smallimg=document.getElementsByClassName("oldImg");

// for(let i=0;i<smallimg.length;i++){
//     console.dir(smallimg[i]);
//     console.dir(smallimg[i].src);
// }

// console.log("***********************************")
// for(let i=0;i<smallimg.length;i++){
//     smallimg[i].src="/WebDevelopment/ClassWork/JavaScript/Main Part/Img/spiderman_img.png"
//     console.dir(`value of image no. ${i} is changed.`);

// }

// console.log("***********Query Selector************************")
// console.dir(document.querySelector('h1'));
// console.dir(document.querySelector("#description"));
// console.dir(document.querySelector("div a"));
// console.dir(document.querySelectorAll("div a"));
// console.dir(document.querySelector(".oldImg"));
// console.dir(document.querySelectorAll("p"));

// let links=document.querySelectorAll('.box a');

//     for(links of links){
//         links.style.color="purple";
//     }
//     for(let i=0;i<links.length;i++){
//         links[i].style.color="yellow";
//     }

let para1= document.createElement('p');
para1.innerText="Hi I am Rajan";
document.querySelector("body").append(para1);
para1.classList.add("red")


let h3= document.createElement('h3');
h3.innerText="Hi I am blue h3";
document.querySelector("body").append(h3);
h3.classList.add("blue")

let div =document.createElement("div");
let h1=document.createElement("h1")
let para2=document.createElement("para2")

h1.innerText="I am inner div";
div.append(h1)
para2.innerText="ME TOO!"
div.append(para2)

div.classList.add("box")

document.querySelector("body").prepend(div);



