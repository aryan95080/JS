
// const user={
//     userName:"Aryan",
//     price:535,
//     welcomeMessage:function(){
//         console.log(`${this.userName} ,welcome to this website`)
//         console.log(this)
//     }
// }

// user.welcomeMessage()
// user.userName="A K Aryan"
// user.welcomeMessage()

//console.log(this)

// function chai(){
//     let userName="Adarsh"
//     //console.log(this.userName)
// }
// chai()

// const chai=()=>{
//     let userName="Adarsh"
//     console.log(this)

// }
// chai()

// Arrow funciton

// console.log(arrow1(3,5))
// const arrow1=(prm1,prm2)=>prm1+prm2 // this is implicit return
// console.log(arrow1(3,9))
// const arrow2=(prm1,prm2)=>(
//     prm1+prm2 // this is implicit return
// )
// console.log(arrow2(3,2))

// const arrow3=(a,b)=>{
//     return a+b // this is explicit return
// }
// console.log(arrow3(3,5))

// const arrow4=()=>({userName:"aryan"})
// console.log(arrow4())

//Immediately invoked function expressions (IIFE)

(function chai(){
    console.log(`DB is connected`)
})(); // here must be use the semi-colon to end the iffe function other they give the error

((useName)=>{
    console.log(`${useName} connect to DB`);
})("Aryan")