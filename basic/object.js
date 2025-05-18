// cosnt tinderUser=new Object();   // This is a singleton object but

const tinderUser={}  // This is a non-singleton object

tinderUser.id="123"
tinderUser.name="Aryan"
tinderUser.isLoggedIn=true

// console.log(tinderUser);
// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));
// console.log(tinderUser.hasOwnProperty('isLoggedI'));

const regularUser={
    email:"ak@gmail.com",
    fullName:{
        firstName:"A K",
        lastName:"Arayan"
    }
}

// console.log(regularUser.fullName);

// merge the object to each-other

const obj1={1:'a',2:'b',6:'c'}
const obj2={4:'d',5:'e',3:'f'}

// const obj3={obj1,obj2};
// console.log(obj3);

// const obj3=Object.assign(obj1,obj2)
// const obj3=Object.assign({},obj1,obj2)
// console.log(obj3);
// console.log(obj1);

// const obj3={...obj1,...obj2}
// console.log(obj3);

const users=[
    {
        id:1,
        email:"ak@gmail.com"
    },
    {
        id:2,
        email:"ak@gmail.com"
    },
    {
        id:3,
        email:"ak@gmail.com"
    },

]

// console.log(users[0]);

const course={
    courseName:"JS or Chai with full efficiency",
    price:"Free of cost",
    courseInstructor:'A K Aryan',
}

const {courseInstructor:inst}=course
// console.log(courseInstructor);
console.log(inst);
