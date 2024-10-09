document.getElementById('navServices').addEventListener('click', function(event) {
        event.preventDefault(); // Prevent adding the hash to the URL
        document.getElementById('services').scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
});

document.getElementById('navAbout').addEventListener('click', function(event) {
        event.preventDefault(); // Prevent adding the hash to the URL
        document.getElementById('about').scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
});

document.getElementById('navContact').addEventListener('click', function(event) {
        event.preventDefault(); // Prevent adding the hash to the URL
        document.getElementById('contact').scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
});
