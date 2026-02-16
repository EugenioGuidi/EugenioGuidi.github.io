document.addEventListener("DOMContentLoaded", () => {
    fetch("https://eugenioguidi.github.io/html/template/header-nav.html")
        .then(r => r.text())
        .then(html => { 
            document.getElementById("header-nav").innerHTML = html;

            document.querySelectorAll(".submenu-toggle").forEach(button => {
                button.addEventListener("click", function() {
                    this.nextElementSibling.classList.toggle("active");
                });
            });
        })
        .catch(err => console.error("Errore header:", err));
});

function toggleMenu() {
    document.getElementById("mobileMenu").classList.toggle("active");
}