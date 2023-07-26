var user=[
    {name:"Swapnil", age:26},
    {name:"Ashu", age:26}
];

//console.log(user[1]);

function printToScreen(){
    console.log("Helloworld");
}

setTimeout(printToScreen, 1 * 1000);

let counter =0;
for (let i=0;i<1000; i++){
    counter= counter + 1;
}
console.log(counter);
