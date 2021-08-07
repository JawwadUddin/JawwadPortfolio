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

