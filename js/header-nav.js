document.addEventListener("DOMContentLoaded", () => {
    fetch("https://eugenioguidi.github.io/html/header-nav.html").then(r => r.text()).then(html => {
        document.getElementById("header-nav").innerHTML = html;
    }).catch(err => console.error("Errore header:", err));
});