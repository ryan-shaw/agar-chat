chrome.webRequest.onBeforeRequest.addListener(
    function(details) {
        console.log(details);
        if(details.url.indexOf('main_out.js') != -1){
            console.log("Overriding main file");
            // return {redirectUrl: "http://test.com/test.js"};
            return {redirectUrl: chrome.extension.getURL('file.js')}
        }
    },
    {urls: ["http://*.agar.io/*.js*"]},
    ["blocking"]);
