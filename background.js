
function onBeforeRequestHandler(details) {
	var s1 = details.url.search("facebook");
	var s2 = details.url.search("fb");
	console.log(s2);
if (s1 != -1 || s2 != -1) {
	if (!isPaused()) {
	return {redirectUrl: "https://www.feedly.com/"};
}
}
}

chrome.webRequest.onBeforeRequest.addListener(onBeforeRequestHandler, {urls: ["http://*/*", "https://*/*"]}, ["blocking"]);
