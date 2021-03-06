const sections = document.querySelectorAll('.section');
const sectBtns = document.querySelectorAll('.controls');
const sectBtn = document.querySelectorAll('.control');
const allSections = document.querySelector('.main-content');


//PageTransitions arrow function
PageTransitions = () => {
    //Button click active class
    for(let i = 0; i < sectBtn.length; i++){
        sectBtn[i].addEventListener('click', function(){
            let currentBtn = document.querySelectorAll('.active-btn');
            currentBtn[0].className = currentBtn[0].className.replace('active-btn', '');
            this.className += 'active-btn';
        })
    }

    //Sections Active Class
    allSections.addEventListener('click', (event) => {
        const id = event.target.dataset.id;
        if(id){
            //hiding other sections
            sections.forEach((section) => {
                section.classList.remove('active');
            })
            //display newly active section
            const element = document.getElementById(id);
            element.classList.add('active');
        }
    })
    //togle theme
    const themeBtn = document.querySelector('.theme-button');
    themeBtn.addEventListener('click', () => {
        let element = document.body;
        element.classList.toggle('light-mode')
    })
};

PageTransitions();