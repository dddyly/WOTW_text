// Advice data structure
const adviceData = {
    life: [
        "Life is 10% what happens to you and 90% how you react to it.",
        "Life's too short to care what others think of you.",
        "Live for yourself.",
        "YOLO",
        "Live to your highest self. You have so much potential.",
        "Life is not a linear journey. Enjoy every moment, instead of sacrificing the present for an uncertain future.",
        "Don't live further than where your feet are.",
        "Do not live forever but try to live all moments of life."
    ],
    self: [
        "Be yourself. Who cares?",
        "Be yourself and live with integrity!",
        "Treat yourself out sometime.",
        "Once a day, give yourself a present!",
        "Trust yourself.",
        "You don't need to find yourself. You're right here."
    ],
    be : [
        "Be kind!",
        "Be curious.",
        "Be scared + do it anyways.",
        "Be honest always…",
        "Be kind...all of us struggle.",
        "Be vulnerable",
        "Be unapologetically you.",
        "Be your most authentic self always.",
        "Always be grateful.",
        "Be intensely curious",
        "Never stop being curious.",
        "If you want to be interesting, be interested"
    ],
    others: [
        "Comparison is the thief of joy.",
        "Don't compare yourself to others.",
        "Other people's perception are not reality",
        "other people's opinion of you don't matter! Be unapologetically yourself.",
    ],
    family: [
        "Family is the most important thing.",
        "Spend time with family.",
        "Prioritize family"
    ],
    intake :[
        "Drink a glass of water.",
        "Drink a glass of COLD water!",
        "eat more veggies!",
    ], 
    dream: [
        "Don't listen to your parents. Just love your dream and follow it.",
        "Go confidently towards your dreams!",
        "Never give up on your dreams.",
        "Chase your dreams no matter what the outcomes are."
    ],
    winandfail: [
        "Don't be afraid to change who you are in order to become who you're supposed to be.",
        "You can't win if you can accept losing.",
        "You panic, you die.",
        "Joy in failure",
        "Successful failure.",
        "Doubts kill dreams more than failure ever will.",
        "Never doubt yourself",
        "Trust your sound!",
        "It's by risking to screw up your life that you may succeed in it!"
    ],
    action: [
        "Just do it...",
        "Don't overthink, just do.",
        "Don't think/hesitate. Just do.",
        "What are you waiting for. ",
        "Say yes more often.",
        "Keep moving forward.",
        "Whatever is meant to be won't pass you by!",
        "Ready to head into the great unknown? Nope... Let's do it.",
        "Move",
        "Smile",
        "Dance!",
        "Live your life in a spontaneous way. Keep moving. I love you."
    ],
    growth: [
        "No matter where you are in your life just remember you are never stuck.",
        "Get out of your comfort zone!",
        "Practice makes perfect!",
        "Stick to doing the things you loved most as a kid.",
        "At any moment you can change your story."
    ],
    perspective: [
        "It's okay to spiral",
        "It's ok to look back at the mistakes in your life...Just don't stare.",
        "Worry about the things you can control, not those you can't.",
        "There are no problems.",
        "Don't blame others for your problems, you can only blame yourself. This is empowerment - taking responsibility.",
        "Watch your head.",
        "Expect nothing.",
        "If you're feeling down, look up, cause the sky is there",
        "If it doesn't make you happy, let it go!",
        "Everything happens for a reason.",
        "You can only connect them. Looking backward.",
        "Don't sweat the small stuff",
        "Don't sweat the small stuff, stupid",
        "Big things are great but make sure to enjoy the small moments.",
        "Keep it simple.",
        "It's not that deep",
        "Maktub. Everything is meant to be."
    ],
    work: [
        "80% good enough is enough!",
        "Stay on target.",
        "If you're in a room full of people better than you, then you're in the right room.",
        "Play hard, work hard!",
        "Take a gap year to Europe.",
        "Don't marry rich, be rich. JK, do both.",
        "Take pride in your work.",
        "Perseverance and hardwork will outlast talent",
        "Zig when others zag",
        "Slow Steady Far."
        
    ],
    connection: [
        "Communicate.",
        "Have fun, and make sure you tell people you love them.",
        "if you are able to help out one person, it's worth it in the end",
        "You are worthy of love, every piece of you.",
        "Loving someone is never a waste.",
        "Enjoy it while it's here.",
        "SERENDIPITY",
        "LOVE"
        
    ],
    agency: [
        "The difference between me and others is that I am 'myself'.",
        "Nobody is coming to save you.",
        "You are your own best advocate.",
        "Don't give up.",
        "Acknowledge what you did well today.",
        "You will always feel overwhelmed. Accept it, so you can find joy.",
        "You don't have to be perfect to fight for your freedom, wherever you are, this is where you start.",
        "It's okay to be weak, but never ok to stay weak.",
        "Keep your head up, stay dangerous!",
        "You rule!",
        "Your purpose is you!"
        
    ],
    learn: [
        "Don't trust easily.",
        "Always ask questions?",
        "Don't be an idiot! Read...Learn...Grow! Be a good person.",
        "Don't solely place value onto material wealth as you will not die with your worldly possessions.",
        
        "Listen first and speak last!",
        "Truly listen, don't wait to respond.",
        "Anger is a secondary emotion!",
        
    ]
};

// Store active timers for each category
const categoryTimers = {};

// Function to get random advice from a category
function getRandomAdvice(category) {
    const adviceList = adviceData[category];
    return adviceList[Math.floor(Math.random() * adviceList.length)];
}

// Function to check if a position overlaps with existing elements
function checkOverlap(x, y, width, height, existingElements) {
    for (const element of existingElements) {
        const rect1 = {
            left: x,
            right: x + width,
            top: y,
            bottom: y + height
        };
        
        const rect2 = {
            left: element.x,
            right: element.x + element.width,
            top: element.y,
            bottom: element.y + element.height
        };
        
        // Add padding to prevent elements from being too close
        const padding = 50; // Increased padding to prevent overlap
        
        if (!(rect1.right + padding < rect2.left || 
              rect1.left > rect2.right + padding || 
              rect1.bottom + padding < rect2.top || 
              rect1.top > rect2.bottom + padding)) {
            return true;
        }
    }
    return false;
}

// Function to find a non-overlapping position
function findNonOverlappingPosition(width, height, existingElements, containerWidth, containerHeight) {
    const maxAttempts = 100; // Increased attempts to find a non-overlapping position
    let attempts = 0;
    
    // Create a grid of possible positions
    const gridSize = 10;
    const cellWidth = containerWidth / gridSize;
    const cellHeight = containerHeight / gridSize;
    
    // Try grid positions first
    for (let i = 0; i < gridSize; i++) {
        for (let j = 0; j < gridSize; j++) {
            const x = i * cellWidth;
            const y = j * cellHeight;
            
            if (!checkOverlap(x, y, width, height, existingElements)) {
                return { x, y };
            }
        }
    }
    
    // If grid positions don't work, try random positions
    while (attempts < maxAttempts) {
        const x = Math.random() * (containerWidth - width);
        const y = Math.random() * (containerHeight - height);
        
        if (!checkOverlap(x, y, width, height, existingElements)) {
            return { x, y };
        }
        
        attempts++;
    }
    
    // If we can't find a non-overlapping position, return a fallback position
    // Try to find a position with minimal overlap
    let bestPosition = {
        x: Math.random() * (containerWidth - width),
        y: Math.random() * (containerHeight - height),
        overlap: Infinity
    };
    
    for (let i = 0; i < 20; i++) {
        const x = Math.random() * (containerWidth - width);
        const y = Math.random() * (containerHeight - height);
        
        let overlapCount = 0;
        for (const element of existingElements) {
            const rect1 = {
                left: x,
                right: x + width,
                top: y,
                bottom: y + height
            };
            
            const rect2 = {
                left: element.x,
                right: element.x + element.width,
                top: element.y,
                bottom: element.y + element.height
            };
            
            if (!(rect1.right < rect2.left || 
                  rect1.left > rect2.right || 
                  rect1.bottom < rect2.top || 
                  rect1.top > rect2.bottom)) {
                overlapCount++;
            }
        }
        
        if (overlapCount < bestPosition.overlap) {
            bestPosition = { x, y, overlap: overlapCount };
        }
    }
    
    return { x: bestPosition.x, y: bestPosition.y };
}

// Function to create advice element
function createAdviceElement(category, advice, existingElements) {
    const element = document.createElement('div');
    element.className = `advice ${category}`;
    element.textContent = advice;
    
    // Get container dimensions
    const container = document.querySelector('.advice-container');
    const containerRect = container.getBoundingClientRect();
    
    // Temporarily add element to DOM to get its dimensions
    element.style.visibility = 'hidden';
    container.appendChild(element);
    const elementRect = element.getBoundingClientRect();
    container.removeChild(element);
    element.style.visibility = 'visible';
    
    // Find non-overlapping position
    const position = findNonOverlappingPosition(
        elementRect.width,
        elementRect.height,
        existingElements,
        containerRect.width,
        containerRect.height
    );
    
    element.style.left = `${position.x}px`;
    element.style.top = `${position.y}px`;
    
    // Add click handler
    element.addEventListener('click', () => {
        window.location.href = `pages/categories/${category}.html`;
    });
    
    return element;
}

// Function to update a single category
function updateCategory(category, existingElements) {
    const container = document.querySelector('.advice-container');
    const advice = getRandomAdvice(category);
    
    // Remove existing element for this category if it exists
    const existingElement = container.querySelector(`.advice.${category}`);
    if (existingElement) {
        existingElement.classList.remove('visible');
        setTimeout(() => {
            container.removeChild(existingElement);
        }, 500);
    }
    
    // Create and add new element
    const element = createAdviceElement(category, advice, existingElements);
    container.appendChild(element);
    
    // Trigger animation
    setTimeout(() => {
        element.classList.add('visible');
    }, 100);
    
    // Update existing elements list
    existingElements.push({
        x: parseFloat(element.style.left),
        y: parseFloat(element.style.top),
        width: element.offsetWidth,
        height: element.offsetHeight
    });
    
    // Set a random display time between 15-25 seconds
    const displayTime = 15000 + Math.random() * 10000;
    
    // Clear any existing timer for this category
    if (categoryTimers[category]) {
        clearTimeout(categoryTimers[category]);
    }
    
    // Set a new timer for this category
    categoryTimers[category] = setTimeout(() => {
        // Fade out the element
        element.classList.remove('visible');
        
        // Remove the element after fade out
        setTimeout(() => {
            if (element.parentNode === container) {
                container.removeChild(element);
            }
            
            // Update the category again after a short delay
            setTimeout(() => {
                updateCategory(category, getExistingElements());
            }, 1000);
        }, 500);
    }, displayTime);
    
    return element;
}

// Function to get all existing elements positions
function getExistingElements() {
    const elements = [];
    const adviceElements = document.querySelectorAll('.advice');
    
    adviceElements.forEach(element => {
        elements.push({
            x: parseFloat(element.style.left),
            y: parseFloat(element.style.top),
            width: element.offsetWidth,
            height: element.offsetHeight
        });
    });
    
    return elements;
}

// Function to initialize all categories
function initializeCategories() {
    const categories = Object.keys(adviceData);
    let existingElements = [];
    
    // Update each category with a delay
    categories.forEach((category, index) => {
        setTimeout(() => {
            updateCategory(category, existingElements);
            existingElements = getExistingElements();
        }, index * 500); // 500ms delay between each category update
    });
}

// Initial setup
document.addEventListener('DOMContentLoaded', () => {
    initializeCategories();
}); 