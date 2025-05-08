const logo = document.getElementById("siteLogo");
const link = document.getElementById("logoLink");

link.addEventListener("click", function(event) {
    event.preventDefault(); // stop navigation

    logo.classList.add("spin");

    // Allow spin to finish, then go to link
    setTimeout(() => {
        logo.classList.remove("spin");
        window.location.href = link.href; // manually go to link
    }, 600); // match animation duration

});

// Toggle high contrast
const contrastToggleBtn = document.getElementById('toggle-contrast');
const body = document.body;

// Load preference
if (localStorage.getItem('highContrast') === 'on') {
    body.classList.add('high-contrast-mode');
}

contrastToggleBtn.addEventListener('click', () => {
    body.classList.toggle('high-contrast-mode');

    // Save preference
    if (body.classList.contains('high-contrast-mode')) {
        localStorage.setItem('highContrast', 'on');
    } else {
        localStorage.removeItem('highContrast');
    }
});