// adjustLayout.js

function applyResponsiveAdjustments() {
    const windowWidth = window.innerWidth;

    const logo = document.getElementById('logoAnim');
    const pinos = document.getElementById('pinos');
    const cruz = document.getElementById('cruz');
    const panteon = document.getElementById('panteon');

    // Valores originales base
    const originalPinosTop = '38.7%';
    const originalCruzTop = '44%';
    const originalLogoScale = '1';
    const originalPanteonScale = '1.0';
    const originalPanteonTop = 'auto';

    if (windowWidth < 320) {
        // MUY PEQUEÑO (móviles muy chicos)
        logo.style.transform = 'scale(1.3)';       // +30%
        logo.style.top='38%';
        pinos.style.top = '60%';                  // +21.3%
        cruz.style.top = '65%';                   // +21%
        panteon.style.transform = 'scale(1.6)';   // +60%
        panteon.style.top = '35%';


        
    } else if (windowWidth < 432) {
        // ~30%
        logo.style.transform = 'scale(1.25)';     // +25%
        logo.style.top = '36%';
        pinos.style.top = '55%';                  // +16.3%
        cruz.style.top = '60%';                   // +16%
        panteon.style.transform = 'scale(1.5)';   // +50%
        panteon.style.top = '34%';

        
    } else if (windowWidth < 576) {
        // ~40%
        logo.style.transform = 'scale(1.2)';      // +20%
        logo.style.top = '42%';
        pinos.style.top = '50%';                  // +11.3%
        cruz.style.top = '55%';                   // +11%
        panteon.style.transform = 'scale(1.4)';   // +40%
        panteon.style.top = '38%';
        
        cielo.style.width = '200%';
        cielo.style.left = '40%';
        cielo.style.top = '70%';
        cielo.style.transform = 'scale(3.2)';


    } else if (windowWidth < 650) {
        // intermedio entre 576 y 720 (~40%-45%)
        logo.style.transform = 'scale(1.15)';    // +15%
        logo.style.top = '41%';
        pinos.style.top = '50%';
        cruz.style.top = '58%';
        panteon.style.transform = 'scale(1.35)';
        panteon.style.top = '40%';

        
    } else if (windowWidth < 720) {
        // ~50%
        logo.style.transform = 'scale(1.1)';      // +10%
        logo.style.top = '48%';
        pinos.style.top = '45%';                  // +6.3%
        cruz.style.top = '50%';                   // +6%
        panteon.style.transform = 'scale(1.3)';   // +30%
        panteon.style.top = '42%';
    
        cielo.style.width = '200%';
        cielo.style.left = '40%';
        cielo.style.top = '70%';
        cielo.style.transform = 'scale(3.2)';
    
    } else {
        // PANTALLA NORMAL O GRANDE → restaurar valores originales
        logo.style.transform = `scale(${originalLogoScale})`;
        pinos.style.top = originalPinosTop;
        cruz.style.top = originalCruzTop;
        panteon.style.transform = `scale(${originalPanteonScale})`;
        panteon.style.top = originalPanteonTop;
        cielo.style.width = '200%';
        cielo.style.left = '40%';
        cielo.style.top = '40%';
        cielo.style.transform = 'scale(3)';  // 50% más grande

    }
}

// Ejecutar al cargar y al redimensionar
window.addEventListener('load', applyResponsiveAdjustments);
window.addEventListener('resize', applyResponsiveAdjustments);


function ejemplo() {
    const header = document.querySelector('header');
    const section = document.querySelector('.seccion-mariposa');  // <– asegúrate de tener esta línea

    if (header && section) {
        const headerHeight = header.offsetHeight;
        section.style.marginTop = `${headerHeight}px`;
    }
}
