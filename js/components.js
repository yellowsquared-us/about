// Load components
async function loadComponent(elementId, componentPath) {
    try {
        const response = await fetch(componentPath);
        const html = await response.text();
        document.getElementById(elementId).innerHTML = html;
    } catch (error) {
        console.error(`Error loading component from ${componentPath}:`, error);
    }
}

// Initialize components when the page loads
document.addEventListener('DOMContentLoaded', () => {
    // Load header
    if (document.getElementById('header-component')) {
        loadComponent('header-component', './components/header.html');
    }
});