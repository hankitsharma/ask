let musicPlaying = false;

// 1. paste your Formspree URL here!
const FORMSPREE_URL = "https://formspree.io/f/mvzezoqn"; 

window.addEventListener('load', () => {
    launchConfetti();
    
    // Automatically send the time and answer to your email
    sendConfirmationToEmail();

    const music = document.getElementById('bg-music');
    music.volume = 0.3;
    
    // Autoplay music
    music.play().then(() => {
        musicPlaying = true;
        document.getElementById('music-toggle').textContent = '🔊';
    }).catch(() => {
        // Fallback: Play on first click
        document.addEventListener('click', () => {
            if (!musicPlaying) {
                music.play().catch(() => {});
                musicPlaying = true;
                document.getElementById('music-toggle').textContent = '🔊';
            }
        }, { once: true });
    });
});

// Function to send the data silently in the background
function sendConfirmationToEmail() {
    const now = new Date();
    const formattedTime = now.toLocaleString(); // Captures exact date and time

    const data = {
        time: formattedTime,
        answer: "YES! (Successfully agreed to unblock)"
    };

    fetch(FORMSPREE_URL, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
        body: JSON.stringify(data)
    })
    .then(response => {
        if (response.ok) {
            console.log("Confirmation sent successfully!");
        }
    })
    .catch(error => {
        console.error("Error sending confirmation:", error);
    });
}

function launchConfetti() {
    const colors = ['#ff69b4', '#ff1493', '#ff85a2', '#ffb3c1', '#ff0000', '#ff6347', '#fff', '#ffdf00'];
    const duration = 6000;
    const end = Date.now() + duration;

    // Initial burst
    confetti({
        particleCount: 150,
        spread: 100,
        origin: { x: 0.5, y: 0.3 },
        colors
    });

    // Side cannons
    const interval = setInterval(() => {
        if (Date.now() > end) {
            clearInterval(interval);
            return;
        }

        confetti({
            particleCount: 40,
            angle: 60,
            spread: 55,
            origin: { x: 0, y: 0.6 },
            colors
        });

        confetti({
            particleCount: 40,
            angle: 120,
            spread: 55,
            origin: { x: 1, y: 0.6 },
            colors
        });
    }, 300);
}

function toggleMusic() {
    const music = document.getElementById('bg-music');
    if (musicPlaying) {
        music.pause();
        musicPlaying = false;
        document.getElementById('music-toggle').textContent = '🔇';
    } else {
        music.play();
        musicPlaying = true;
        document.getElementById('music-toggle').textContent = '🔊';
    }
}
