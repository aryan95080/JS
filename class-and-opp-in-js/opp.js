const user={
    username:"A K Aryan",
    loginCount:4,
    signedIn:true,
    getUserDetails:function(){
        // console.log(`username: ${this.username}`);
        console.log(this)
    }
}
const user1={
    username:"Aryan",
    loginCount:4,
    signedIn:true,
    getUserDetails:function(){
        // console.log(`username: ${this.username}`);
        console.log(this)
    }
}
//console.log(user.username);
//console.log(user.getUserDetails());

function userDetail(username,loginCount,signedIn){
    this.username=username;
    this.loginCount=loginCount;
    this.signedIn=signedIn;
    this.greeting=function(){
        console.log(`Welcome ${username}`)
    }
    return this;
}

// const userOne=userDetail("A K Aryan",23,true)
// console.log(userOne);

// const userTwo=userDetail("Aryan",23,true)
// console.log(userOne);
// console.log(userTwo)

const userOne=new userDetail("A K Aryan",23,true)
//console.log(userOne);

const userTwo=new userDetail("Aryan",23,true)
// console.log(userOne);
// console.log(userTwo);
console.log(userTwo.constructor);