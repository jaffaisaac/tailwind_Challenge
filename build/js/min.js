const handleHumbergerMenu =()=>{
    let humber =document.getElementById('humberClick');
    let Close_humber =document.getElementById('close_Humberger');

    // *toggle humberger
    const toggleMenu =()=>{
        Close_humber.classList.toggle('hidden');
        Close_humber.classList.toggle('flex');

    }


humber.addEventListener('click',toggleMenu)
Close_humber.addEventListener('click',toggleMenu);


}

document.addEventListener('DOMContentLoaded',handleHumbergerMenu)