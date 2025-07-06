const promise1=new Promise(function(resolve,reject){
        //Do an async task
        //DB Calls ,cryptography,network
    setTimeout(() => {
        console.log('Async tasck is completed')
        resolve();
    }, 1000);
})
promise1.then(function(){
    console.log("Promise consumed")
})

new Promise(function(resolve,reject){
    setTimeout(() => {
        console.log("Async task 2 is completed  ")
        resolve()
    }, 1000);
}).then(function(){
    console.log("Async task 2 is resolve")
})

const promise3=new Promise(function(resolve,reject){
    setTimeout(() => {
        resolve({username:"A K Aryan",email:"akaryan@gmail.com"})
    }, 1000);
})

promise3.then(function(user){
    console.log(user);
})

const promise4=new Promise(function(resolve,reject){
    setTimeout(() => {
        let error=false;
        if(!error){
            resolve({username:"A K Aryan",email:"akaryan@gmail.com"})
        }
        else{
            reject('Error:Somethin went wrong')
        }
        
    }, 1000);
})
promise4.then((user)=>{
    console.log(user);
    return user.username;
}).then((username)=>{
    console.log(username)
}).catch(function(error){
    console.log(error)
}).finally(()=>console.log("The promise is either resolved or rejected"))

const promise5=new Promise(function(resolve,reject){
    setTimeout(function(){
        let error=true;
        if(!error){
            resolve({username:"Java Script",password:"123"})
        }
        else{
            reject('Error: Js went wrong !')
        }
    }, 1000);
})

async function consumePromise5(params) {
    try {
        const response=await promise5;
        console.log(response);
    } catch (error) {
        console.log(error);
    }
}

consumePromise5()

async function getAllUsers() {
    try {
        const response=await fetch('https://jsonplaceholder.typicode.com/users')
        const data=await response.json();
        console.log(data)
    } catch (error) {
        console.log("Error",error)
    }
    
}
//getAllUsers();

fetch('https://jsonplaceholder.typicode.com/users')
.then((response)=>{
    return response.json()
})
.then((data)=>console.log(data))
.catch((error)=>console.log(error))