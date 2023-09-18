// Get the language selection from the URL
const urlParams = new URLSearchParams(window.location.search);
const selectedLang = urlParams.get('lang');

// Check if a valid language is selected, otherwise default to English
const language = selectedLang === 'ru' ? 'ru' : 'en';

// Function to load the content based on the selected language
function loadContent() {
    // Get the main element
    const mainElement = document.querySelector('main');



// Function to handle language selection
function handleLanguageSelection(event) {
    const lang = event.target.dataset.lang;

    // Update the URL with the selected language
    const currentUrl = new URL(window.location.href);
    currentUrl.searchParams.set('lang', lang);
    window.location.href = currentUrl.href;
}

// Load the content on page load
document.addEventListener('DOMContentLoaded', loadContent);

// Add click event listeners to language selection links
const languageLinks = document.querySelectorAll('a[data-lang]');
languageLinks.forEach(link => {
    link.addEventListener('click', handleLanguageSelection);
});



function loadContent() {
    const mainElement = document.querySelector('main');

    // Define content for different languages
    const content = {
        en: {
            about: "English content for About section...",
            tours: "English content for Tours section...",
            contacts: "English content for Contacts section..."
        },
        ru: {
            about: "Russian content for About section...",
            tours: "Russian content for Tours section...",
            contacts: "Russian content for Contacts section..."
        }
    };

    // Get the content based on the selected language
    const selectedContent = content[language];

    // Update the content of the mainElement
    mainElement.innerHTML = `
        <div class="about">${selectedContent.about}</div>
        <div class="tours">${selectedContent.tours}</div>
        <div class="contacts">${selectedContent.contacts}</div>
    `;
}
