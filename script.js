// FORMSPREE PAGE OPEN ALERT
window.addEventListener('DOMContentLoaded', () => {
    // 👇 Your actual Formspree ID key extracted from the URL
    const formspreeId = 'mvzezoqn'; 

    if (formspreeId === 'YOUR_FORM_ID') return; // Safety guard

    // Silently sends the background request to Formspree
    fetch(`https://formspree.io/f/${formspreeId}`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
        body: JSON.stringify({
            subject: '💌 She/He opened the page!',
            message: 'Your unblock request link was just opened.',
            timestamp: new Date().toLocaleString()
        })
    })
    .then(response => console.log('View alert status:', response.status))
    .catch(err => console.error('Formspree error:', err));
});

// INTERACTION LOGIC
const gifStages = [
    "https://media.tenor.com/EBV7OT7ACfwAAAAj/u-u-qua-qua-u-quaa.gif",    // 0 normal
    "https://media1.tenor.com/m/uDugCXK4vI4AAAAd/chiikawa-hachiware.gif",  // 1 confused
    "https://media.tenor.com/f_rkpJbH1s8AAAAj/somsom1012.gif",             // 2 pleading
    "
