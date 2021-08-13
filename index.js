
////////// generating background circles animation on the homepage 
function createCircle() {
    const colors = ['#d4d1ff', '#9b99bd', '#6c6a7e', '#d1a2a2'];
    const bg = colors[Math.floor(Math.random()*colors.length)]
    const section = document.querySelector('section');
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

/////////The carousel effect on the projects page

//grabbing the elements in the DOM that need manipulation
let projectImg = document.querySelector('.project-item img');
let projectTitle = document.querySelector('.project-data h3');
let projectDescription = document.querySelector('.project-data p');
let projectURL = document.querySelector('.project-data a');
let counter = 0;
//Including all project data in an array
let projectData = [
    {
        title: "Stride",
        image_source: "images/stride.jpg",
        desciption: "A full stack habit tracking app utilising HTML, CSS, Vanilla JS and express as front end technologies. A relational database namely PostregreSQL was used for the backend. Users were able to creare their own accounts and authentication was implemented using json web tokens.",
        link: "https://the-stride.netlify.app/#login"
    },
    {
        title: "Fact-Ory",
        image_source: "images/fact-ory.jpg",
        desciption: "My first ever full stack project. Fact-ory is place where users can post interesting facts. Users are able to add comments and react to facts other users may have submitted. HTML, JS and Tailwind CSS were used on the front-end, whilst the back-end was created with node.js and express. Additionally, an API was integrated to allow users to search and select a GIF they want to include in their post.",
        link: "https://fact-ori.netlify.app/"
    },
    {
        title: "Portfolio Website",
        image_source: "images/mobile-version.jpg",
        desciption: "In order to test the skills I had picked up over the past few weeks, I decided to challenge myself to create this portfolio without the aid of any libraries or frameworks. Everything on this page was created with HTML, CSS and Vanilla JS. It was a great experience overall, and it allowed me to visibly see the drastic devlopement that I had undergone in such short time.",
        link: "#"
    },
    {
        title: "Project 4",
        image_source: "#",
        desciption: "Coming soon ...",
        link: "#"
    },
    {
        title: "Project 5",
        image_source: "#",
        desciption: "Coming soon ...",
        link: "#"
    },
]; 

function displayProject(counter) {
    projectTitle.textContent = projectData[counter].title;
    projectImg.src = projectData[counter].image_source;
    projectDescription.textContent = projectData[counter].desciption;
    projectURL.href = projectData[counter].link;
}

displayProject(counter)

//allowing arrows to move to another project
let rightArrow = document.querySelector(".right-arrow");
let leftArrow = document.querySelector(".left-arrow");

rightArrow.addEventListener("click", () => {
    if (counter === projectData.length -1 ) {
        counter = 0;
        displayProject(counter);
    } else {
        counter++;
        displayProject(counter);
    }
})
leftArrow.addEventListener("click", () => {
    if (counter === 0) {
        counter = projectData.length -1;
        displayProject(counter);
    } else {
        counter--;
        displayProject(counter);
    }
})
