function positionAdvice(advice) {
    const container = document.querySelector('.container');
    const containerRect = container.getBoundingClientRect();
    const adviceRect = advice.getBoundingClientRect();
    
    // Get all visible advice elements
    const visibleAdvice = Array.from(document.querySelectorAll('.advice.visible'));
    
    // Try different positions until we find one that doesn't overlap
    let attempts = 0;
    const maxAttempts = 50;
    let position;
    
    do {
        position = {
            left: Math.random() * (containerRect.width - adviceRect.width),
            top: Math.random() * (containerRect.height - adviceRect.height)
        };
        
        // Check if this position overlaps with any visible advice
        const hasOverlap = visibleAdvice.some(existingAdvice => {
            if (existingAdvice === advice) return false;
            
            const existingRect = existingAdvice.getBoundingClientRect();
            return !(
                position.left + adviceRect.width < existingRect.left ||
                position.left > existingRect.left + existingRect.width ||
                position.top + adviceRect.height < existingRect.top ||
                position.top > existingRect.top + existingRect.height
            );
        });
        
        attempts++;
    } while (hasOverlap && attempts < maxAttempts);
    
    // Apply the position
    advice.style.left = `${position.left}px`;
    advice.style.top = `${position.top}px`;
} 