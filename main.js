let btnFeature = document.querySelector('.nav-links li');
let btnCompany = document.querySelector('.nav-links2');

let arrowFeature = document.querySelector('.arrow');
let arrowCompany = document.querySelector('.arrow');


btnFeature.addEventListener('click', (e) => {
    let ckFeatureActive = document.querySelector('.nav-links li').childNodes[5].classList[1];
    
    let currentSubMenuForMobile = e.view.screen.availWidth

    if (ckFeatureActive!="active") {
        btnFeature.childNodes[5].classList.add('active');
        arrowFeature.src = "./images/icon-arrow-up.svg";


        if(currentSubMenuForMobile <= 375) {
            btnFeature.style.height = '180px'
        }

    } else {
        btnFeature.childNodes[5].classList.remove('active');
        arrowFeature.src = "./images/icon-arrow-down.svg";

        if(currentSubMenuForMobile <= 375)  {
            btnFeature.style.height = '38px';
            btnFeature.childNodes[5].classList.remove('active');
        }
    }
});

// MOBILE
let btnMenu = document.querySelector('.mobile-menu-btn img');
let ckbtn = 0;

hamMenu.addEventListener('click', () => {
    
    if(ckbtn == 0) {
        btnMenu.src = "./images/icon-close-menu.svg";
        let navMenu = document.querySelector('menu')
        navMenu.classList.add('active');
        navMenu.nextElementSibling.style.display = 'inline-block';

        ckbtn++
    } else {
        btnMenuenu.src = "./images/icon-menu.svg";
        let navMenu = document.querySelector('menu')
        navMenu.classList.remove('active');
        navMenu.nextElementSibling.style.display = 'none';

        ckHam--
    }
});