let name="Aryan";
let channel="A K Aryan";

// console.log(name.length);
// console.log(name.truelength);

let hero=["Thor","Spiderman","Saktiman"];

let heroPower={
    Thor:"Hammer",
    Spinderman:"Sling",
    Saktiman:"Moving",
    
    getSpiderPower:function(){
        console.log(`Spoder power is ${this.Spinderman}`)
    },
    getThorPower:function(){
        console.log(`Thor power is ${this.Thor}`)
    },
    getSaktimanPower:function(){
        console.log(`Saktiman power is ${this.Saktiman}`)
    }
}
Object.prototype.aryan = function(){
    console.log(`aryan is present in all objects`);
}

Array.prototype.heyAryan = function(){
    console.log(`Aryan says hello`);
}

// heroPower.aryan()
// myHeros.aryan()
// myHeros.heyAryan()
// heroPower.heyAryan()

// inheritance

const User = {
    name: "chai",
    email: "chai@google.com"
}

const Teacher = {
    makeVideo: true
}

const TeachingSupport = {
    isAvailable: false
}

const TASupport = {
    makeAssignment: 'JS assignment',
    fullTime: true,
    __proto__: TeachingSupport
}

Teacher.__proto__ = User

// modern syntax
Object.setPrototypeOf(TeachingSupport, Teacher)

let anotherUsername = "ChaiAurCode     "

String.prototype.trueLength = function(){
    console.log(`${this}`);
    console.log(`True length is: ${this.trim().length}`);
}

anotherUsername.trueLength()
"hitesh".trueLength()
"iceTea".trueLength()
