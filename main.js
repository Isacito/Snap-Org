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