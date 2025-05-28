
const buttons=document.querySelectorAll(".color-box");
//console.log(buttons)
const body=document.querySelector('body');
const nav=document.querySelector('.navbar');
buttons.forEach(function(button){
    // console.log(button);
     button.addEventListener('click',function(e){
        if(e.isTrusted){
            console.log(e.target.id);
            body.style.backgroundColor=e.target.id
        }
    })
   
})



