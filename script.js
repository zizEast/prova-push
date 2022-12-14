const li=Array.from(document.querySelectorAll('.navlist > li')) 
li.forEach(item=> {
    console.log(item);
    item.addEventListener('click', ()=> {
        console.log('ciao');
        item.classList.toggle('open')
    })
})

const faBars=document.querySelector('.fa-bars')
faBars.addEventListener('click',()=>{
    document.body.classList.toggle('open')
})

const faClose=document.querySelector('.fa-close')
faClose.addEventListener('click',()=>{
    document.body.classList.toggle('open')
})


const reveals=document.querySelectorAll('.reveal')
reveals.forEach(reveal=>{
    if(reveal.getBoundingClientRect()<document.documentElement.scrollTop-200){
        reveal.classList.add('inPage')
    }else{
        reveal.classListremove('inPage')
    }
})