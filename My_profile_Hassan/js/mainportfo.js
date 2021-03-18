const showMenu = (toggLeId,navId) =>{
    const toggle = document.getElementById(toggLeId),
    nav = document.getElementById(navId)

    if(toggle && nav){
        toggle.addEventListener('click' , ()=>{
            nav.classList.toggle('show')
        })
    }
}
showMenu('nav-toggle','nav-menu')

/*active and remove menu*/
const navLink = document.querySelectorAll('.nav__link')

function linkAction(){
    //active link
    navLink.forEach(n => n.classList.remove('active'))
    this.classList.add('active')

    //remove menu mobile
    const navMenu = document.getElementById('nav-menu')
    navMenu.classList.remove('show')
}

//hadi mili kat ckliki 3la chi catg.. outomatik kathayid dik menu o kiban dkchi
navLink.forEach(n => n.addEventListener('click',linkAction))


/*===== SCROLL REVEAL ANIMATION =====*/
const sr = ScrollReveal({
    origin: 'top',
    distance: '80px',
    duration: 1000,
    reset: true
});

/*had sr.reveal dawir dyalha katkhili ex button o imag.. kibani bchewiya mili kadire actualiser*/
/*SCROLL HOME*/
sr.reveal('.porfo-title',{}); 
sr.reveal('.home__social-icon',{ interval: 200}); 

/*SCROLL WORK*/
sr.reveal('.work__img',{interval: 200}); 

