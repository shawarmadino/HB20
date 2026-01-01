
const floatingElements = ['💖', '🐈', '❤️‍🔥', '🌸', '💫', '💕', '🦖'];

function createFloating() {
    const element = document.createElement('div');
    element.className = 'floating';
    element.textContent =
        floatingElements[Math.floor(Math.random() * floatingElements.length)];

    element.style.left = Math.random() * 100 + 'vw';
    element.style.top = '100vh';
    element.style.fontSize = (Math.random() * 20 + 20) + 'px';

    document.body.appendChild(element);

    gsap.fromTo(
        element,
        { 
            y: 0,
            opacity: 0 
        },
        {
            y: -window.innerHeight - 100,
            x: Math.random() * 200 - 100,
            rotation: Math.random() * 360,
            duration: Math.random() * 10 + 5,
            opacity: 1,
            ease: "none",
            onComplete: () => element.remove()
        }
    );
}

setInterval(createFloating, 500);
