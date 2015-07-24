var paused = false;
$(document).ready(function() {
	$(".url-form").submit(function(event) {
		event.preventDefault();
		var $inputs = $("input").serializeArray();
		console.log($inputs);
	});

	$("#pause").click(function() {
		paused = !paused;
	});
});