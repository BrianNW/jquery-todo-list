
/* Check off specific todos by clicking */
$("li").click(function() {
	$(this).toggleClass("completed");
}); 

/* Click on x to delete Todo */
$("span").click(function(event) {
	
	/* gives parent element as jquery element. Will give us li and remove entire li */
	$(this).parent().fadeOut(500, function() {
		$(this).remove();
	});
	/* stops event from bubbling up */
	event.stopPropagation();	
});



