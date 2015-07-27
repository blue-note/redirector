$(document).ready(function() {
	var port = chrome.extension.connect({"name": "sync"});
	var paused;
	chrome.storage.sync.get("paused", function(object) {
	paused = object.paused;
	setText();
	});

	$(".url-form").submit(function(event) {
		event.preventDefault();
		var $inputs = $("input").serializeArray();
	});

	$("#pause").click(function() {
		paused = !paused;
		setText();
		port.postMessage(paused);	
		chrome.storage.sync.set({"paused": paused});
	});

	var setText = function() {
		var text;
		if (paused) text = "unpause";
		else text = "pause";
		$("#pause").text(text);
	};
});