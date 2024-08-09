document.addEventListener('DOMContentLoaded', () => {
    const container = document.querySelector('.particle-container');
    const particleCount = 35; // COUNT

    for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        particle.classList.add('particle');
        particle.style.position = 'absolute'; // ABSOLUTE POSITION
        particle.style.opacity = 0; // OPACITY FROM START
        container.appendChild(particle);


        setTimeout(() => {
            animateParticle(particle);
        }, Math.random() * 1000); 
    }
});

function animateParticle(particle) {
    const containerWidth = window.innerWidth;
    const containerHeight = window.innerHeight;

    // RANDOM POSITION FOR PARTICLES
    let startX = Math.random() * containerWidth;
    let startY = Math.random() * containerHeight;

    particle.style.left = `${startX}px`;
    particle.style.top = `${startY}px`;
    particle.style.opacity = 0.2;

    function moveParticle() {
        // NEW SPAWNRATE FOR PARTICLES
        const newX = Math.random() * containerWidth;
        const newY = Math.random() * containerHeight;
        particle.style.transition = `transform ${Math.random() * 10 + 10}s linear`;
        particle.style.transform = `translate(${newX - startX}px, ${newY - startY}px)`;

        // UPDATE STARTX STARTY
        startX = newX;
        startY = newY;
    }

    moveParticle();
    setInterval(moveParticle, Math.random() * 2000 + 1000); // INTERVAL FOR MOVEMENT
}