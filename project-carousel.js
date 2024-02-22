
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