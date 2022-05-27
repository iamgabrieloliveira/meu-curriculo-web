// Descrição das Skills 
const ReadMoreButtons = document.querySelectorAll('[data-showskill]');
const ReadMoreContainer = document.querySelectorAll('[data-skillContainer]');

ReadMoreButtons.forEach((item, i) => {
    item.addEventListener('click', function(){
        ReadMoreContainer[i].classList.toggle('on');
        if(item.classList.contains('uil-angle-down')){
            item.classList.replace('uil-angle-down', 'uil-angle-up')
            
        }else{
            item.classList.replace('uil-angle-up', 'uil-angle-down')
        }
    });
}) 

//Cabecalho
const HeaderTarget = document.querySelector('[data-header]');
const headerClass = 'on';
window.addEventListener('scroll', HeaderChange)

function HeaderChange(){
    if(window.pageYOffset < 100){
        HeaderTarget.classList.add(headerClass);
    }else{
        HeaderTarget.classList.remove(headerClass);
    }
}

// Go to Up
const GoToUpButton = document.querySelector('#go-to-up');

window.addEventListener('scroll', GoToUpButtonVisible)

function GoToUpButtonVisible(){
    if(window.pageYOffset > 100){
        GoToUpButton.classList.add('on');
    }else{
        GoToUpButton.classList.remove('on');
    }
}

const titulo = document.querySelector('#app');
function TypeWriter(element){
    const TextArray = element.innerHTML.split('')
    element.innerHTML = ''
    TextArray.forEach((letra, i) =>{
        setTimeout(() => element.innerHTML += letra, 75 * i)
    })
}
TypeWriter(titulo)

const target = document.querySelectorAll('[data-scrollreveal]');
const ScrollAnimationClass = 'animeted';
console.log(target)
function ScrollReveal(){
    const windowtop = window.pageYOffset + (window.innerHeight * 0.75);
    target.forEach(function(element){
        if((windowtop) > element.offsetTop) {
            element.classList.add(ScrollAnimationClass)
        }else {
            element.classList.remove(ScrollAnimationClass)
        }  
    })
}
window.addEventListener('scroll', function(){
    ScrollReveal()
})


const ProgressBars = document.querySelectorAll('[data-progress-bar]');
const BarComplete = 'complete';
function AnimationBar(){
    const windowtop = window.pageYOffset + window.innerHeight;
    ProgressBars.forEach(function(element){
        if((windowtop) > element.offsetTop){
            element.classList.add(BarComplete)
            console.log(windowtop)
            console.log(element.offsetTop)
        }else{
            element.classList.remove(BarComplete)
        }
    })
}
window.addEventListener('scroll', function(){
    AnimationBar()
})
console.log(ProgressBars)

//Menu Hamburguer

const MenuMobile = document.getElementById('menu-hamburguer');
const CloseButton = document.querySelector('#Menu-Close')
MenuMobile.addEventListener('click', MenuOpen);
MenuMobile.addEventListener('touchstart', MenuOpen)

CloseButton.addEventListener('click', MenuClose);
CloseButton.addEventListener('touchstart', MenuClose);

function MenuOpen(event){
    if(event.type === 'touchstart') event.preventDefault();
    const menu = document.querySelector('.menu-section');
    menu.classList.add('active');
}
function MenuClose(){
    if(event.type === 'touchstart') event.preventDefault();
    const menu = document.querySelector('.menu-section');
    menu.classList.remove('active');
}


//Scroll Suave

const MenuItens = document.querySelectorAll('[data-scroll-to-down]');
MenuItens.forEach(item => {
    item.addEventListener('click', ScrollToIDonClick);
})

function ScrollToIDonClick(event){
    event.preventDefault();
    const element = event.target;
    const id = element.getAttribute('href');
    const to = document.querySelector(id).offsetTop -120;
    window.scroll({
        top: to,
        behavior: 'smooth',
    })
}

GoToUpButton.addEventListener('click', ScrollToUp)

function ScrollToUp(){
    window.scroll({
        to: 0,
        behavior: 'smooth',
    })
}

//Dark Mode
const DarkModeBtn = document.querySelector('#darkmode-btn');
const Colors = document.querySelector('.html');

DarkModeBtn.addEventListener('click', DarkMode)

function DarkMode(){
    if(DarkModeBtn.classList.contains('uil-moon')){
        DarkModeBtn.classList.replace('uil-moon', 'uil-sun');
    }else{
        DarkModeBtn.classList.replace('uil-sun', 'uil-moon');
    }
    Colors.classList.toggle('on');
}

//Project Pop Up

const PopUpOpenButton = document.querySelectorAll('[data-infoicon-btn]');
const PopUpCloseButton = document.querySelectorAll('[data-closePopUp]');
const PopUpContainer = document.querySelectorAll('[data-PopUpContainer]');

PopUpOpenButton.forEach((item) => {
    item.addEventListener('click', function(){
        const id = item.getAttribute('id');
        const target = document.querySelector(`#${id}`);
        target.style.visibility = 'visible';
        target.style.opacity = '1';
        Colors.style.overflow = 'hidden'
        PopUpCloseButton.forEach(item => {
            item.addEventListener('click', function(){
            target.style.visibility = 'hidden';
            target.style.opacity = '0';
            Colors.style.overflow = 'auto';
            })
        })
    })
})
// Scroll Down Blink

const ScrollDownButton = document.querySelector('.scroll-down');

window.addEventListener('scroll', function(){
    if(window.pageYOffset > 100){
        ScrollDownButton.classList.add('off')
    }else{
        ScrollDownButton.classList.remove('off')
    }
})