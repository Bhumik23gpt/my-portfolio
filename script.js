document.addEventListener("DOMContentLoaded", function () {
    const buttons = document.querySelectorAll(".nav-button");
    const sections = document.querySelectorAll(".section");
    const homeLink = document.getElementById("home-link");

    function showSection(targetId) {
        const currentActive = document.querySelector(".section.active");
        const newActive = document.getElementById(targetId);

        if (currentActive !== newActive) {
            // Fade out current section
            currentActive.classList.remove("active");
            setTimeout(() => {
                currentActive.style.visibility = "hidden";
                currentActive.style.opacity = "0";
            }, 500); // Match transition duration

            // Fade in new section
            setTimeout(() => {
                newActive.classList.add("active");
                newActive.style.visibility = "visible";
                newActive.style.opacity = "1";
            }, 500);
        }
    }

    buttons.forEach((button) => {
        button.addEventListener("click", function () {
            const target = this.getAttribute("data-target");
            showSection(target);
        });
    });

    // Make "Bhumik Darji" clickable to return to the homepage
    homeLink.addEventListener("click", function (event) {
        event.preventDefault(); // Prevent default anchor behavior
        showSection("home");
    });

    // Show homepage on initial load
    showSection("home");

    // Function to update background images based on device width
    function updateBackgroundImages() {
        const isMobile = window.innerWidth <= 768;
        document.getElementById("home-image").src = isMobile ? "1-mobile.png" : "1.png";
        document.getElementById("about-image").src = isMobile ? "2-mobile.png" : "2.png";
        document.getElementById("clients-image").src = isMobile ? "3-mobile.png" : "3.png";
    }

    // Run on page load and window resize
    updateBackgroundImages();
    window.addEventListener("resize", updateBackgroundImages);
});