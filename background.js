
function onBeforeRequestHandler(details) {

if (details.url == "http://www.facebook.com/" || details.url == "https://www.facebook.com/") return {redirectUrl: "https://www.feedly.com/"};

}


chrome.webRequest.onBeforeRequest.addListener(onBeforeRequestHandler, {urls: ["http://*/*", "https://*/*"]}, ["blocking"]);
console.log("hey, i'm here");