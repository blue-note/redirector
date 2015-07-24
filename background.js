function onBeforeRequestHandler(details) {
	var url = details.url;
	var fb_one = url.search("facebook");
	var fb_two = url.search("fb");
	if (fb_one != -1 || fb_two != -1) return {"redirectUrl": "http://www.feedly.com"};
}

chrome.webRequest.onBeforeRequest.addListener(onBeforeRequestHandler, {urls: ["http://*/*", "https://*/*"]}, ["blocking"]);