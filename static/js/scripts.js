(function(){
    console.log("%cwololol", "color: red; font-size: 25px;");

    if (window.location.pathname == '/') {
        // Only run on main index
        if('serviceWorker' in navigator) {
            navigator.serviceWorker
                .register('../service-worker.js', { scope: '/' })
                .then(function(registration) {
                    console.log('Service Worker Registered');
                });

            navigator.serviceWorker
                .ready
                .then(function(registration) {
                    console.log('Service Worker Ready');
                });
        }
    }
})();

