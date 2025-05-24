// condition operator: >,<,>=,<=,==,!= and ===

// let val=30;
// if(val==30){
//     console.log("==,30");
// }
// if(val=="30"){
//     console.log('==,"30"');
// }
// if(val===30){
//     console.log('===,30');
// }
// if(val==="30"){
//     console.log('===,"30"');
// }



// const scr=400;
// if(scr>800){
//     let grade='A';
//     console.log(`Your grade is ${grade}`)
// }
// else{
//     console.log(`Your grade is not ${grade}`)
// }


// let val=800;
// if(val<200){
//     console.log("Value is less than 200")
// }
// else if(val<400){
//     console.log("Value is less than 400")
// }
// else if(val>500){
//     console.log("Value is greater than 500")
// }
// else if(val==600){
//     console.log("Value is equals to 600")
// }
// else{
//     console.log("value is greater than 600;")

// }

// switch case

// switch(key){
//     case value:
//         break;
//     case value:
//         break;
//     default:
//         break;
// }

// const month=3;
// switch(month){
//     case 1:
//         console.log("Jan");
//         break;
//     case 2:
//         console.log("Feb");
//         break;
//     case 3:
//         console.log("Mar");
//         break;
//     default:
//         console.log("Please enter valid number");
//         break;
// }

// Falsy values: 0,-0,BigInt 0n,"",null,undefined,NaN
// Truthy values:"0",'false'," ",[],{},function(){}

// const arr=[];
// if(arr.length==0){
//     console.log('arr is empty');
// }

// let val={};
// if(Object.keys(val).length==0){
//     console.log("Object is empty");
// }

// Nullish Coalescing Operator (??): null undefined

// let val;
// val=5??10;
// val=null??10;
// val=undefined??10;
// val=null??20??40;

// console.log(val);

// Ternary Operator

const price=600;
price>500?console.log("price is greater than 500"):console.log("price is less than 500")