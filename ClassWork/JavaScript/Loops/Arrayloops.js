let fruits=["mango","apple","banana","litchi"]
fruits.push("pineapple")
    for(let i=0;i<fruits.length;i++){
        console.log(i,fruits[i]);
    }

//reverse order
console.log("reverse order")
let fruits1=["mango","apple","banana","litchi"]
fruits.push("pineapple")
    for(let i=fruits1.length-1;i>=0;i--){
        console.log(i,fruits1[i]);
    }
//Nested Array
console.log("Nested Array")
let heros=[["ram","syam","mohan"],["mango","apple","banana","litchi"]];
    for(let i=0;i<heros.length;i++){
        console.log(`List ${i}`);
        for(let j=0;j<heros[i].length;j++){
            console.log(heros[i][j]);
        }
    }


console.log("Studeent data");
let student=[["aman",95],["raja",85],["karan",90]]
    for(let i=0;i<student.length;i++){
        console.log(`student ${i}`);

        for(let j=0;j<student[i].length;j++){
            console.log(student[i][j]);
        }
    }


//For Of Loops
console.log("For Of Loops")
for(fruit of fruits){
    console.log(fruit)
}

for(char of "apnacollege"){
    console.log(char);
}

//Nested for Loops
console.log("Nested for Loops")
for( list of heros){
    for(names of list){
        console.log(names);
    }
}


