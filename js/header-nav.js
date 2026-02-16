document.addEventListener("DOMContentLoaded", () => {
    fetch("https://eugenioguidi.github.io/html/template/header-nav.html")
        .then(r => r.text())
        .then(html => { 
            document.getElementById("header-nav").innerHTML = html;

            document.querySelectorAll(".submenu-toggle").forEach(button => {
                button.addEventListener("click", function() {

                    const submenu = this.nextElementSibling;

                    if (submenu.style.maxHeight) {
                        submenu.style.transition = "max-height 0.2s ease-in";
                        submenu.style.maxHeight = null;
                    } else {
                        submenu.style.transition = "max-height 0.35s ease-out";
                        submenu.style.maxHeight = submenu.scrollHeight + "px";
                    }
                });
            });
        })
        .catch(err => console.error("Errore header:", err));
    
    document.addEventListener("click", function(event) {

        const menu = document.getElementById("mobileMenu");
        const hamburger = document.querySelector(".hamburger");

        if (!menu.classList.contains("active")) return;

        const clickDentroMenu = menu.contains(event.target);
        const clickHamburger = hamburger.contains(event.target);

        if (!clickDentroMenu && !clickHamburger) {
            menu.classList.remove("active");
        }
    });
});

function toggleMenu() {
    document.getElementById("mobileMenu").classList.toggle("active");
}