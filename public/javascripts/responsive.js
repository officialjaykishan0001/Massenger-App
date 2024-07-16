document.addEventListener("DOMContentLoaded", function () {
    const hamburger = document.querySelector(".hamburger");
    const userlist = document.querySelector(".userlist");
    const hamburgerOpen = document.querySelector(".hamburger-open");
    const hamburgerClose = document.querySelector(".hamburger-close");

    function toggleMenu() {
        if (hamburgerClose.style.display === "none") {
            userlist.style.display = "block";
            userlist.style.width = "80%";
            hamburgerClose.style.display = "block";
            hamburgerOpen.style.display = "none";
        } else {
            userlist.style.display = "none";
            userlist.style.width = "80%";
            hamburgerClose.style.display = "none";
            hamburgerOpen.style.display = "block";
        }
    }

    function responsiveHamburger() {
        if (window.innerWidth <= 650) {
            if (!hamburger.classList.contains("listener-added")) {
                hamburger.addEventListener("click", toggleMenu);
                hamburger.classList.add("listener-added");
            }
        } else {
            if (hamburger.classList.contains("listener-added")) {
                hamburger.removeEventListener("click", toggleMenu);
                hamburger.classList.remove("listener-added");
                // Reset userlist styles for larger screens if needed
                userlist.style.display = "";
                userlist.style.width = "";
                hamburgerClose.style.display = "none";
                hamburgerOpen.style.display = "block";
            }
        }
    }

    // Initial call on page load
    responsiveHamburger();

    // Use ResizeObserver to call on resize
    const resizeObserver = new ResizeObserver(() => {
        responsiveHamburger();
    });

    resizeObserver.observe(document.body);
});
