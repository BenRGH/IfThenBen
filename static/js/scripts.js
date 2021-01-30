(function(){
    console.log("%cScript running", "color: red; font-size: 25px;");
    
    const rootElement = document.documentElement;

    // ! Dark mode toggle

    const toggleDarkMode = document.getElementById("dark-mode-toggle");
    const toggleDarkModeIcon = document.getElementById("dark-mode-toggle--icon");
    const userPrefers = getComputedStyle(document.documentElement).getPropertyValue('content');	

    if (theme === "dark") {
        toggleDarkModeIcon.className = "icon-sun-o";
    } else if (theme === "light") {
        toggleDarkModeIcon.className = "icon-moon-o";
    } else if (userPrefers === "dark") {
        document.documentElement.setAttribute('data-theme', 'dark');
        window.localStorage.setItem('theme', 'dark');
        toggleDarkModeIcon.className = "icon-sun-o";
    } else {
        document.documentElement.setAttribute('data-theme', 'light');
        window.localStorage.setItem('theme', 'light');
        toggleDarkModeIcon.className = "icon-moon-o";
    }

    toggleDarkMode.addEventListener("click", () => {
        let currentMode = document.documentElement.getAttribute('data-theme');
        if (currentMode === "dark") {
            document.documentElement.setAttribute('data-theme', 'light');
            window.localStorage.setItem('theme', 'light');
            toggleDarkModeIcon.className = "icon-moon-o";
        } else {
            document.documentElement.setAttribute('data-theme', 'dark');
            window.localStorage.setItem('theme', 'dark');
            toggleDarkModeIcon.className = "icon-sun-o";
        }
    });

    // ! Scroll to top functionality

    const scrollToTopBtn = document.getElementById("scrollTopBtn");

    if (scrollToTopBtn !== null && scrollToTopBtn !== undefined) {
        scrollToTopBtn.addEventListener("click", () => {
            rootElement.scrollTo({
                top: 0,
                behavior: "smooth"
            })
        })

        document.addEventListener("scroll", () => {
            let scrollTotal = rootElement.scrollHeight - rootElement.clientHeight
            if ((rootElement.scrollTop / scrollTotal ) > 0.30 ) {
                // Show button
                console.log("show");
                scrollToTopBtn.classList.add("showBtn")
            } else {
                // Hide button
                console.log("hide");
                scrollToTopBtn.classList.remove("showBtn")
            }
        })
    }


    // ! Offline service worker

    // if (window.location.pathname == '/') {
    //     // Only run on main index
    //     if('serviceWorker' in navigator) {
    //         navigator.serviceWorker
    //             .register('../service-worker.js', { scope: '/' })
    //             .then(function(registration) {
    //                 console.log('Service Worker Registered');
    //             });

    //         navigator.serviceWorker
    //             .ready
    //             .then(function(registration) {
    //                 console.log('Service Worker Ready');
    //             });
    //     }
    // }
})();

