$(document).ready(function(){
	$(".whitecircle").mouseenter(function(){
		$(".initials a").css("color", "white");
		$(".whitecircle").css("background-color", "#ffb3cc");
	})

	$(".whitecircle").mouseleave(function(){
		$(".initials a").css("color", "#ffb3cc");
		$(".whitecircle").css("background-color", "white");
	})

	$(".initials").mouseenter(function(){
		$(".initials a").css("color", "white");
		$(".whitecircle").css("background-color", "#ffb3cc");
	})

	$(".initials").mouseleave(function(){
		$(".initials a").css("color", "#ffb3cc");
		$(".whitecircle").css("background-color", "white");
	})
})