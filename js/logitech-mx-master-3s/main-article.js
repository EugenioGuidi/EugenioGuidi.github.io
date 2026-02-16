document.addEventListener("DOMContentLoaded", () => {
    fetch("https://eugenioguidi.github.io/html/recensioni/logitech-mx-master-3s/main-article.html").then(r => r.text()).then(html => {
        document.getElementById("main-article").innerHTML = html;
    }).catch(err => console.error("Errore header:", err));
});