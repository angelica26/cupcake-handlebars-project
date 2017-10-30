 $(document).ready(function(){

// Tried changing position of items based on if they were eaten or not by
// adding/removing the class attribute for the list item. Did not work.

 	// var isEaten = $("eatButton").attr("data-eaten");
 	// if (isEaten == 0) {
 	// 		$("li").addClass(".lefty")
 	// 	}

 	// 	else if (isEaten == 1) {
 	// 		$("li").removeClass(".lefty").addClass(".righty");
 	// 	}

// changing cupcake's eaten status on click of button 
 	$(".eat").click(function(){
 		console.log("Eat btn clicked");
 		event.preventDefault();

 		var id = $(this).attr("data-id");
 		var eaten = $(this).attr("data-eaten");
 		console.log(id);
 		console.log(eaten);

 		if (eaten == 1) {
 			eaten = 0;
 			
 		}
 		else {
 			eaten = 1;
 			
 		}

 		$.ajax({
			url: "/updateCupcake",
			method: "post",
			data: {
				id: id,
				eaten: eaten
			}
		}).then(function(res){
			window.location.href = res;
		});
 	});

// Tried changing the positioning of cupcakes on click based on eaten status.
// Also did not work.
 
 	// $("#eatButton").click(function(){
 	// 	event.preventDefault();
 	// 	var eaten = $(this).attr("data-eaten")
 		
 	// 	if (eaten == 0) {
 	// 		$("li").css("left", "5%");
 	// 	}

 	// 	else {
 	// 		$("li").css("left", "70%");
 	// 	}

 	// })

});