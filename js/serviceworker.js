/*service worker registration*/ 
if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('/sw.js')
    /*on success*/
        .then(reg => (console.log("service worker successfully registered: " + reg.scope)))
    /*on failure*/
        .catch(error => (console.log("registration failed :" + error)));
}