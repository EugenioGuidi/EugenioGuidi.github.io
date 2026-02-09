document.addEventListener("DOMContentLoaded", () => {
    fetch("https://eugenioguidi.github.io/html/template/footer.html").then(r => r.text()).then(html => {
        document.getElementById("footer").innerHTML = html;
    }).catch(err => console.error("Errore header:", err));
});