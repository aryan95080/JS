// create a function which is add two number

function addTwoNumber(num1,num2){
    // console.log(num1+num2);
}
addTwoNumber(1,2);
const result=addTwoNumber(3,5);
// console.log(result);

function addTwoNumber1(num1,num2){
    // let result=num1+num2
    return num1+num2;
}
const result1=addTwoNumber1(5,6);
// console.log(result1);


function loginUserMessage(username){
    if(!username){
        console.log("please Enter username !")
        return "Enter Valid username"
    }
    return `${username} Just logged in`
}

console.log(loginUserMessage());
console.log(loginUserMessage("Aryan"));

