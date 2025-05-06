// messagelink.js  
document.addEventListener('DOMContentLoaded', function() {
    document.querySelectorAll('.bg-hover-message[data-link]').forEach(function(msg) {
        msg.addEventListener('click', function() {
            const url = msg.getAttribute('data-link');
            if (url) {
                window.open(url, '_blank');
            }
        });
        // Optional: make it look clickable
        msg.style.cursor = 'pointer';
    //    msg.style.textDecoration = 'underline';
    });
});