
// we can not filter in for each loop because they are not return any value, so we have to use filter method

const arr=[2,4,5,6,6,7,2,7,7,8,4,3,3];
// const fltrArr=arr.filter((ele)=>ele>6);
const fltrArr=arr.filter((ele)=>{
    return ele>5&&ele<8;
});
// console.log(fltrArr);

// const updArr=arr.map((ele)=>{
//     return ele+10;
// })
// console.log(updArr);

// const updArr=arr
//             .map((ele)=>ele+10)
//             .map((ele)=>ele*1)
//             .filter((ele)=>ele>15);
// console.log(updArr);


// Reduce array in java-script

const arry=[1,2,3,4,5,6,7];

// const reducArry=arry.reduce(function(acc,currVal){
//     console.log(`acc : ${acc} and curr-Value : ${currVal}`);
//     return acc+currVal;
// },0)

const reducArry=arry.reduce((acc,curr)=>acc+curr,0)
console.log(reducArry);
