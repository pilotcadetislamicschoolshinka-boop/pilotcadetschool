document.addEventListener("DOMContentLoaded", function () {
    console.log("Pilot Cadet Public Islamic School Website Loaded Successfully!");

    const links = document.querySelectorAll("nav a");

    links.forEach(link => {
        link.addEventListener("mouseenter", function () {
            this.style.color = "#FFD700";
        });

        link.addEventListener("mouseleave", function () {
            this.style.color = "#ffffff";
        });
    });
});
