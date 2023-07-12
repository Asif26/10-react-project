const menuToggle = document.getElementById('toggle');
const close =document.getElementById('close');
const open = document.getElementById('open');
const model = document.getElementById('model');




menuToggle.addEventListener('click', ()=>{
    document.body.classList.toggle('show-nav');
})



//2. listen for click on open button

open.addEventListener('click', ()=> model.classList.add('show-model' ))


close.addEventListener('click', ()=> model.classList.remove('show-model'))



window.addEventListener("click", e=>{
    e.target ===model ? model.classList.remove('show-model'):false

})
