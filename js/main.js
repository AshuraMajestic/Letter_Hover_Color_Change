const bulb= document.getElementById('glow');

bulb.addEventListener('click', ()=>{
    document.querySelector('.dark').classList.toggle('light');
    document.querySelector('.noglow').classList.toggle('glow');
    setTimeout(()=>{
        document.querySelector('.hide').classList.toggle('show');
    },1000);
})