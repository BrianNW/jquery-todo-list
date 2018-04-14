
/* Check off specific todos by clicking. Use on instead of click for all future child li's */
$("ul").on("click", "li", function() {
	$(this).toggleClass("completed");
}); 

/* Create an event object. First fire off when you click on x to delete Todo */
$("ul").on("click", "span", function(event) {
	
	/* gives parent element as jquery element. Will give us li and remove entire li */
	$(this).parent().fadeOut(500, function() {
		$(this).remove();
	});
	/* stops event from bubbling up */
	event.stopPropagation();	
});

/* Initiate event object */
$("input[type='text']").keypress(function(event) {
	
	/* Check for the Enter key keycode */
	if(event.which === 13) {
		/* grabbing new todo text from input */
		var todoText = $(this).val();
		/* set an empty input */
		$(this).val("");
		/* select ul, create new li and add to ul */
		$("ul").append("<li><span><i class='fa fa-trash'> </i></span> " + todoText + "</li");
	}
});

$(".fa-plus").click(function() {
	$("input[type='text']").fadeToggle();
});


