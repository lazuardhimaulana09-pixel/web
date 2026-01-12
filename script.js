document.addEventListener('DOMContentLoaded', () => {
    const sky = document.getElementById('sky');
    const astronaut = document.getElementById('astronaut');

    if (!sky || !astronaut) {
        console.error("Elemen sky atau astronaut tidak ditemukan!");
        return;
    }

    // 1. Fitur Astronot mengikuti kursor
    document.addEventListener('mousemove', (e) => {
        setTimeout(() => {
            astronaut.style.left = e.clientX + 20 + 'px';
            astronaut.style.top = e.clientY + 20 + 'px';
        }, 100);
    });

    // 2. Efek Percikan Bintang Saat Klik
    sky.addEventListener('mousedown', (e) => {
        for (let i = 0; i < 8; i++) {
            const particle = document.createElement('div');
            particle.innerHTML = '✨';
            particle.style.position = 'absolute';
            particle.style.left = e.clientX + 'px';
            particle.style.top = e.clientY + 'px';
            particle.style.pointerEvents = 'none';
            particle.style.zIndex = '1000';

            const x = (Math.random() - 0.5) * 200;
            const y = (Math.random() - 0.5) * 200;

            particle.animate([
                { transform: 'translate(0,0) scale(1)', opacity: 1 },
                             { transform: `translate(${x}px, ${y}px) scale(0)`, opacity: 0 }
            ], { duration: 1000, easing: 'ease-out' });

            document.body.appendChild(particle); // Tempel ke body agar selalu terlihat
            setTimeout(() => particle.remove(), 1000);
        }
    });
});
