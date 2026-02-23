// Array of fortune messages
const fortunes = [
    "True wisdom comes not from knowledge, but from understanding.",
    "A journey of a thousand miles begins with a single step.",
    "Happiness is found when you stop comparing yourself to others.",
    "Opportunities are everywhere, you just have to look.",
    "Patience is the key to joy.",
    "Every day is a new beginning.",
    "Kindness is a language the deaf can hear and the blind can see.",
    "Your attitude determines your direction.",
    "Great things never come from comfort zones.",
    "Believe you can and you're halfway there.",
    "Success is not final, failure is not fatal: it is the courage to continue that counts.",
    "The best way to predict the future is to create it.",
    "You are capable of amazing things.",
    "Fortune favors the bold.",
    "Every moment is a fresh beginning.",
    "Dream big and dare to fail.",
    "The harder you work, the luckier you get.",
    "Mistakes are proof that you are trying.",
    "Your limitation—it’s only your imagination.",
    "Push yourself, because no one else is going to do it for you.",
    "Sometimes later becomes never. Do it now.",
    "Great things never come from comfort zones.",
    "Don’t stop when you’re tired. Stop when you’re done.",
    "Wake up with determination. Go to bed with satisfaction."
];

const fortuneBox = document.getElementById('fortuneBox');
const greenBtn = document.getElementById('greenBtn');
const yellowBtn = document.getElementById('yellowBtn');
const skyBtn = document.getElementById('skyBtn');
const redBtn = document.getElementById('redBtn');

// Show one random fortune per load
function displayRandomFortune() {
    const idx = Math.floor(Math.random() * fortunes.length);
    fortuneBox.textContent = fortunes[idx];
}

// Button functions for styling
if (greenBtn) {
    greenBtn.addEventListener('click', function() {
        fortuneBox.style.backgroundColor = '#4CAF50'; // green
        fortuneBox.style.borderColor = '#FFEB3B'; // yellow
        fortuneBox.style.color = '#FFFFFF'; // white
        fortuneBox.style.fontFamily = 'Courier New, monospace';
        fortuneBox.style.fontSize = '1.3rem';
    });
}
if (yellowBtn) {
    yellowBtn.addEventListener('click', function() {
        fortuneBox.style.backgroundColor = '#FFEB3B'; // yellow
        fortuneBox.style.borderColor = '#4CAF50'; // green
        fortuneBox.style.color = '#000000'; // black
        fortuneBox.style.fontFamily = 'Georgia, serif';
        fortuneBox.style.fontSize = '1.2rem';
    });
}
if (skyBtn) {
    skyBtn.addEventListener('click', function() {
        fortuneBox.style.backgroundColor = '#00BFFF'; // sky blue
        fortuneBox.style.borderColor = '#888888'; // gray
        fortuneBox.style.color = '#5a1059'; // dark purple
        fortuneBox.style.fontFamily = 'Verdana, sans-serif';
        fortuneBox.style.fontSize = '1.15rem';
    });
}
if (redBtn) {
    redBtn.addEventListener('click', function() {
        fortuneBox.style.backgroundColor = '#FF0000'; // red
        fortuneBox.style.borderColor = '#000000'; // black
        fortuneBox.style.color = '#FFEB3B'; // yellow
        fortuneBox.style.fontFamily = 'Impact, Charcoal, sans-serif';
        fortuneBox.style.fontSize = '1.25rem';
    });
}

// On load
window.onload = function() {
    displayRandomFortune();
    // Set default style (optional, can be omitted if CSS handles it)
    fortuneBox.style.backgroundColor = '#fff8dc';
    fortuneBox.style.borderColor = '#bdb76b';
    fortuneBox.style.color = '#d2691e';
    fortuneBox.style.fontFamily = 'Arial, sans-serif';
    fortuneBox.style.fontSize = '1.2rem';
    console.log('Fortune Generates Successfully');
};
