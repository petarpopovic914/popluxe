document.getElementById('exploreBtn').addEventListener('click', function(event) {
        event.preventDefault(); // Prevent any default behavior
        document.getElementById('services').scrollIntoView({ 
            behavior: 'smooth',
            block: 'start'
        });
});
