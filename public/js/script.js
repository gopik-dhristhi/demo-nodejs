// Simple JS for demonstration
console.log("Welcome to Plant World!");

// Buy button function
function buyPlant(plantName) {
    alert("You selected: " + plantName);
}

// Highlight current page in navbar
document.addEventListener('DOMContentLoaded', () => {
    const current = window.location.pathname.split("/").pop();
    document.querySelectorAll('nav ul li a').forEach(link => {
        if(link.getAttribute('href') === current){
            link.style.textDecoration = "underline";
        }
    });
});