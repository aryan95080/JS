// global level scope
let a=6
var b=90;
const c=93;

// console.log(a,b,c)


if(true){
    // block level scope
    let a=50
    var b=60;
    const c=9;
    // console.log(a,b,c)

}
// console.log(a,b,c)

function first(){
    const username='Aryan'
    function second(){
        const website='Youtube'
        console.log(username)
    }
    // console.log(website)
    // second()
}
first()


// --------------------Interesting-------------------------//

console.log(8);
function addOne(nums){
    return nums+1;
}
//addOne(5);

addTwo(4)
const addTwo=function(nums){
    return nums+2;
}
//addTwo(5)





