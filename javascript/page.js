console.log("script loaded");

// reference both the INPUT and the Message div into variables 
var input = $('#userid'); 
var msg = $('#name-error-id');
console.log(msg); 

// when i change the input's value (by typing)

input.change(function(){
	// get the length of the value 

	var length = input.val().length; 

	// if length < 4 then remove the hidden class 

	if (length < 4){
		msg.removeClass('hidden')
	} else {
		msg.addClass('hidden'); 
	}
});

