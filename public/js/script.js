// Simple JS for demonstration
console.log("Welcome to Plant World!");

// You could add interactive features, e.g., highlight current page
document.addEventListener('DOMContentLoaded', () => {
    const current = window.location.pathname.split("/").pop();
    document.querySelectorAll('nav ul li a').forEach(link => {
        if(link.getAttribute('href') === current){
            link.style.textDecoration = "underline";
        }
    });
});