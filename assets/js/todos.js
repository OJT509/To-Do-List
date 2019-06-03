//When an li is clicked inside a ul toggle class.
$("ul").on("click", "li", function(){
	$(this).toggleClass("completed");	
});

//Delete on click by removing parent element of the span.
$("ul").on("click", "span", function(event){
	$(this).parent().fadeOut(750, function(){
		//Refers to parent element and then removes.
		$(this).remove();
	});
	event.stopPropagation();
})

$("input[type='text']").keypress(function(event){
	if(event.which === 13){
		//Get the entered text and save to variable.
		var todoText = $(this).val();
		$(this).val("");

		$("ul").append("<li><span><i class='fas fa-trash-alt'></i></span> " + todoText + "</li>");
	}
});
