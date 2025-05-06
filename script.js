// Array of creative Instagram captions
const captions = [
    "✨ Living life in full color",
    "🌅 Chasing sunsets and dreams",
    "🎨 Creating my own masterpiece",
    "🌟 Making memories one moment at a time",
    "🌿 Finding peace in nature's embrace",
    "🎭 Life's a stage, and I'm the main character",
    "🌈 Spreading good vibes only",
    "🌊 Going with the flow",
    "🎵 Dancing to the rhythm of life",
    "🌙 Dreaming with my eyes wide open",
    "🎪 Life's a circus, and I'm the ringmaster",
    "🌺 Blooming where I'm planted",
    "🎭 Playing different roles, living different stories",
    "🌟 Stars can't shine without darkness",
    "🎨 Painting my own reality",
    "🌞 Letting my light shine bright",
    "🎯 Goals in sight, dreams in flight",
    "🌴 Paradise found in everyday moments",
    "🎪 Life's a carnival, and I'm here for the ride",
    "🌊 Making waves and breaking boundaries",
    "🎭 Every day's a new performance",
    "🌟 Sparkle and shine, it's my time",
    "🌺 Growing through what I'm going through",
    "🎨 Adding color to a black and white world",
    "🌅 Sunrise soul, sunset heart",
    "✨ Magic happens outside your comfort zone",
    "🎵 Life's a melody, I'm just dancing along",
    "🌿 Rooted in reality, reaching for the stars",
    "🎪 Living life like it's a grand adventure",
    "🌟 Making my own constellation",
    "🌺 Blooming in the chaos",
    "🎨 Creating my own path",
    "🌅 Golden hour, golden memories",
    "✨ Manifesting magic daily",
    "🎭 Life's a beautiful mess",
    "🌊 Riding the waves of change",
    "🌟 Shining through the shadows",
    "🎵 Dancing through the storm",
    "🌿 Growing wild and free",
    "🎪 Life's a beautiful journey",
    "🌞 Basking in the sunshine",
    "🎯 Aiming for the stars",
    "🌴 Finding paradise within",
    "🎭 Playing my own tune",
    "🌟 Lighting up the world",
    "🌺 Blooming in adversity",
    "🎨 Painting my dreams",
    "🌅 Chasing golden moments",
    "✨ Creating my own magic",
    "🎵 Dancing to my own beat"
];

// DOM Elements
const generateBtn = document.getElementById('generateBtn');
const captionElement = document.getElementById('caption');
const themeToggle = document.getElementById('themeToggle');
const themeIcon = themeToggle.querySelector('.theme-icon');
const imageUpload = document.getElementById('imageUpload');
const imagePreview = document.getElementById('imagePreview');
const uploadPlaceholder = document.getElementById('uploadPlaceholder');

// Theme state
let isDarkMode = false;

// Function to get random caption
function getRandomCaption() {
    const randomIndex = Math.floor(Math.random() * captions.length);
    return captions[randomIndex];
}

// Function to update caption with animation
function updateCaption() {
    if (!imagePreview.src) {
        captionElement.textContent = "Please upload an image first!";
        return;
    }

    captionElement.style.opacity = '0';
    
    setTimeout(() => {
        captionElement.textContent = getRandomCaption();
        captionElement.style.opacity = '1';
    }, 300);
}

// Function to handle image upload
function handleImageUpload(event) {
    const file = event.target.files[0];
    if (file) {
        const reader = new FileReader();
        
        reader.onload = function(e) {
            imagePreview.src = e.target.result;
            imagePreview.style.display = 'block';
            uploadPlaceholder.style.display = 'none';
            captionElement.textContent = "Click 'Get Caption' to generate a caption!";
        }
        
        reader.readAsDataURL(file);
    }
}

// Function to toggle theme
function toggleTheme() {
    isDarkMode = !isDarkMode;
    document.body.setAttribute('data-theme', isDarkMode ? 'dark' : 'light');
    themeIcon.textContent = isDarkMode ? '☀️' : '🌙';
    
    // Save theme preference
    localStorage.setItem('darkMode', isDarkMode);
}

// Event Listeners
generateBtn.addEventListener('click', updateCaption);
themeToggle.addEventListener('click', toggleTheme);
imageUpload.addEventListener('change', handleImageUpload);

// Check for saved theme preference
const savedTheme = localStorage.getItem('darkMode');
if (savedTheme === 'true') {
    isDarkMode = true;
    document.body.setAttribute('data-theme', 'dark');
    themeIcon.textContent = '☀️';
}

// Add keyboard accessibility
generateBtn.addEventListener('keypress', (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
        updateCaption();
    }
});

themeToggle.addEventListener('keypress', (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
        toggleTheme();
    }
}); 