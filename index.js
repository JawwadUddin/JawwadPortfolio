const section = document.querySelector('section');
////////// generating background circles animation on the homepage 
function createCircle() {
    const colors = ['#d4d1ff', '#9b99bd', '#6c6a7e', '#d1a2a2'];
    const bg = colors[Math.floor(Math.random()*colors.length)]
    const circle = document.createElement('span');
    const size = Math.floor(Math.random()*50) + 20;
    circle.style.width = `${size}px`;
    circle.style.height = `${size}px`;
    circle.style.position = 'absolute'
    circle.style.bottom = Math.random() * innerHeight + 'px';
    circle.style.right = Math.random() * innerWidth + 'px';
    circle.style.borderRadius = '100%';
    circle.style.background = bg;
    circle.style.zIndex = '1';
    section.appendChild(circle);
    setTimeout(()=>{
        circle.remove()
    }, 5000)
}

setInterval(createCircle, 150)   

////////////creating the typing effect on the homepage

const typingContent = ["I'm Jawwad Uddin", "This is my portfolio", "I enjoy creative experiences", "Let's collaborate"];
let count = 0;
let index = 0;
let currentText = "";
let letter = "";
let typingDiv = document.querySelector('.typing');
let runningagain = "";

async function type() {
    if (count === typingContent.length) {
        count = 0;
    }
    currentText = typingContent[count];
    letter = currentText.slice(0, ++index);
    typingDiv.textContent = letter;
    if (letter.length === currentText.length){
        count++;
        index = 0;
        clearInterval(runType)
        if (typeof runningagain !== 'undefined') {clearInterval(runningagain)}
        const timer = ms => new Promise(res => setTimeout(res, ms))
        await timer(1500)
        while (letter.length !== 0 ) {
            letter = letter.slice(0, -1)
            typingDiv.textContent = letter;
            await timer(50)
        }
        runningagain = setInterval(type, 50);
    }
}

const runType = setInterval(type, 50);

//////////creating the navbar animations

const navSlide = () => {
    const burger = document.querySelector('.burger');
    const navbar = document.querySelector('.navbar');
    const navLinks = document.querySelectorAll('.navbar a')

    burger.addEventListener('click', ()=> {
        navbar.classList.toggle('nav-active');
        navLinks.forEach((link, index)=> {
            if (link.style.animation) {
                link.style.animation = '';
            } else {
                link.style.animation = `navLinkFade 0.1s ease forwards ${index/7 + 0.3}s`
            }
        })
        burger.classList.toggle('toggle')
    })
}

navSlide()
