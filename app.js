window.addEventListener("load", function() {
    console.log("Hello World!");

    // Install app
    if (navigator.mozApps) {
        var manifestURL = location.href.substring(0, location.href.lastIndexOf("/")) + "/manifest.webapp";
        console.log("Manifest url: "+manifestURL);
        var req = navigator.mozApps.install(manifestURL);
        req.onsuccess = function() {
            console.log(this.result.origin);
        };
        req.onerror = function() {
            console.log(this.error.name);
        };
    }
});
