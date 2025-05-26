// for loop

// for(let i=0;i<10;i++){
//     if(i==7){
//         console.log("Thala for reason")
//     }
//     for(let j=0;j<10;j++){
//     if(j==7){
//         console.log("Thala for reason at index "+i )
//     }
// }
// }

// for(let i=0;i<10;i++){
//     if(i==6){
//         console.log(`${i} is detected.`)
//         break; // break out the loop 
//     }
//     console.log(`Number is ${i}`)
// }

// for(let i=0;i<10;i++){
//     if(i==6){
//         console.log(`${i} is detected.`)
//         continue;   // escape the current iteration
//     }
//     console.log(`Number is ${i}`)
// }

// while loop

let i=10;
// while(i<10){
//     console.log(`Number is ${i}`);
//     i++;
// }

// do while loop

// do{
//     console.log(`Number is ${i}`);
//     i++;
// }   
// while(i<=10);

const arr=[2,3,4,5,6,7,8,9];
const greeting="Hello guys, Good morning"

// for of loop

// for(const ele of arr){
//     console.log(ele);
// }

// for(const char of greeting){
//     console.log(char)
// }

// Maps: In js map is an object which is hold the unique value and key 

const map=new Map()
map.set("IN","India")
map.set("USA","United state America")
map.set("FR","France")
// console.log(map);

// iteration on map and map is not iterable on "for in loop"

// for(const m of map){
//     console.log(m[0]);
// }

// for(const m of map){
//     console.log(m[1]);
// }

// for(const [key,value] of map){
//     console.log(`${key} and ${value}`);
// }

// iteration on Object

// const obj={
//     js:"Java Script",
//     Cpp:"C++",
//     jwt:"Json web token",
// }
// for(const key in obj){
//     console.log(`${key} stands for ${obj[key]}`)
// }

// similar we can iterate for in loop on array

// const ar=[3,4,3,5,6,4,6]
// for(const key in ar){
//     console.log(`${key} and value is ${ar[key]}`)
// }

// for each loop and it is on of most usable loop in production level project 
const coding=["Js","Ruby","Java","Python","CPP"];

// coding.forEach(function(ele){
//     console.log(ele)
// })

// coding.forEach((ele)=>{
//     console.log(ele)
// })

//  coding.forEach((ele,idx,arr)=>{
//     console.log(ele,idx,arr)
// })

// function print(item){
//     console.log(item);
// }
// coding.forEach(print)

// Iteration on the array which contains the object

const langAndExt=[
    {
        languageName:"java",
        languageExtension:"java"
    },
     {
        languageName:"Python",
        languageExtension:"py"
    },
     {
        languageName:"C++",
        languageExtension:"cpp"
    }
]
langAndExt.forEach((ele)=>{
    console.log(ele.languageExtension)
})

