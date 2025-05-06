
document.addEventListener('DOMContentLoaded', function() {
    const bgDiv = document.querySelector('.background-image');
    if (!bgDiv) return;
    const originalBg = bgDiv.style.backgroundImage;
    const originalOpacity = bgDiv.style.opacity;

    document.querySelectorAll('.bg-hover-message[data-bg]').forEach(function(msg) {
        msg.addEventListener('mouseenter', function() {
            bgDiv.style.backgroundImage = `url('${msg.getAttribute('data-bg')}')`;
            bgDiv.style.opacity = 0.7;
        });
        msg.addEventListener('mouseleave', function() {
            bgDiv.style.backgroundImage = originalBg;
            bgDiv.style.opacity = originalOpacity;
        });
    });
});