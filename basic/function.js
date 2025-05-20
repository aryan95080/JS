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

// console.log(loginUserMessage());
// console.log(loginUserMessage("Aryan"));

// function calPrice(...nums1){
//     return nums1;
// }

function calPrice(n1,n2,...nums1){
    return nums1;
}

// console.log(calPrice(300,200,500,300,600,500,100));


// Create a function and passes the object as an argument;

const user={
    userName:"Aryan",
    price:999
}
function handleObject(anyObject){
    console.log(`UserName is ${anyObject.userName} and Price is ${anyObject.price}`)
}

handleObject(user)
handleObject({userName:"A K Aryan",price:5999});


// Similarly Create a function and passes the Array as an argument;
const arr=[23,42,56,42,65,75];

function getSecondValue(anyarr){
    return arr[2];
}
console.log(getSecondValue(arr))
console.log(getSecondValue([35,65,75]))
