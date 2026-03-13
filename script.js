// script.js

// Function to handle menu navigation
function navigateTo(page) {
    // Logic to handle page navigation based on the menu selection
    console.log(`Navigating to ${page}`);
}

// Function to handle form submissions
function handleFormSubmit(event) {
    event.preventDefault(); // Prevent default form submission
    // Logic to handle form data
    const formData = new FormData(event.target);
    console.log(`Form submitted with data: ${JSON.stringify(Object.fromEntries(formData.entries()))}`);
}

// Function to handle game button clicks
function handleGameButtonClick(gameId) {
    // Logic to handle game button interaction
    console.log(`Game button clicked for game ID: ${gameId}`);
}

// Event listeners (example usage)
const menuItems = document.querySelectorAll('.menu-item');
menuItems.forEach(item => {
    item.addEventListener('click', () => navigateTo(item.dataset.page));
});

const form = document.querySelector('form');
form.addEventListener('submit', handleFormSubmit);

const gameButtons = document.querySelectorAll('.game-button');
gameButtons.forEach(button => {
    button.addEventListener('click', () => handleGameButtonClick(button.dataset.gameId));
});