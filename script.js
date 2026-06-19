const glow = document.createElement('div');
document.body.appendChild(glow);

glow.style.position = 'fixed';
glow.style.width = '300px';
glow.style.height = '300px';

glow.style.background = 'radial-gradient(circle, rgba(214, 175, 55, 0.2) 0%, rgba(214, 175, 55, 0) 70%)';
glow.style.borderRadius = '50%';
glow.style.pointerEvents = 'none'; 
glow.style.zIndex = '9999';
glow.style.filter = 'blur(20px)';
glow.style.transform = 'translate(-50%, -50%)';
glow.style.opacity = '0';
glow.style.transition = 'opacity 0.3s ease';

let mouseX = 0, mouseY = 0;
let glowX = 0, glowY = 0;

document.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
    

    glow.style.opacity = '1';
});


document.addEventListener('mouseleave', () => {
    glow.style.opacity = '0';
});


function animateGlow() {

    const distX = mouseX - glowX;
    const distY = mouseY - glowY;


    glowX += distX * 0.1;
    glowY += distY * 0.1;

    glow.style.left = glowX + 'px';
    glow.style.top = glowY + 'px';

    requestAnimationFrame(animateGlow);
}

animateGlow();