var paused;
var onBeforeRequestHandler = function(details) {
	var result;
	var url = details.url;
	var fb_one = url.search("facebook.com");
	var fb_two = url.search("fb.com");
	if (!paused && (fb_one != -1 || fb_two != -1)) {
		return {"redirectUrl": "http://www.feedly.com/"};
	}
};

chrome.extension.onConnect.addListener(function(port) {
	port.onMessage.addListener(function(msg) {
		console.log('message received' + msg);
		paused = msg;
	});
});


chrome.webRequest.onBeforeRequest.addListener(onBeforeRequestHandler, {
	urls: ["http://*/*", "https://*/*"]
}, ["blocking"]);
