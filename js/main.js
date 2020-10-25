var html  = document.querySelector('html');

window.onload = () =>{
    let loadPage = document.querySelector('.on-load');
        

    html.style.overflow = 'visible';
    loadPage.remove();
    
    
}



// select navbar and button up 
const   navbar = document.querySelector("nav"),
        btnUp  = document.querySelector(".btn-up");

// event listener to check the scrolling on the page 
window.addEventListener("scroll",function(){

    navbar.classList.toggle("nav-onscroll", window.scrollY > 100);

    btnUp.classList.toggle("btn-up-hedin",  window.scrollY > 700);

    let navLi   = document.querySelectorAll('nav ul li a'),
        fromTop = window.scrollY;

    navLi.forEach(link => {
        //console.log(link);
        let section = document.querySelector(link.hash);
        //console.log(section);

        if (
            section.offsetTop <= fromTop &&
            section.offsetTop + section.offsetHeight  > fromTop
        ) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });

});


/** strat of play icon video **/ 
// select the play icon 
const btnPlayIcon = document.querySelector('.video-col');

// add event for this btn
var videoFrame = document.querySelector('.video-frame');

btnPlayIcon.onclick = () =>{ 
    
    videoFrame.classList.toggle('hidden');
    html.style.overflow = 'hidden';

}

videoFrame.onclick = () =>{
    videoFrame.classList.add('hidden');
    html.style.overflow = 'visible';
}



/** End of play icon video **/ 


// on click finction to button up 
btnUp.onclick = () =>{ 
    window.scrollTo(0,0);
}

