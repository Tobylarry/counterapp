let buttons = document.querySelector(".buttons");

 
let number = 0;

buttons.addEventListener('click', (e) => {
   if(e.target.classList.contains("add")){
       para.innerHTML++;
   }
   if(e.target.classList.contains("sub")){
       para.innerHTML--;
   }
   if(e.target.classList.contains('reset')){
       para.innerHTML = 0;
   }
})
