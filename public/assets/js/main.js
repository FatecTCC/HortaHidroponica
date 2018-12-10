$(document).ready(function(){


	/*$(".btnAdicionarHorta").click(function(){
		window.open("http://localhost:3000/formHorta");
		return false;
	});*/

	//Home Page
	$(".form").hide();
	
	$(".buttonLeft").click(function(){
		$(".form").toggle();
	});

	$(".buttonRight").click(function(){
		location.href="http://localhost:3000/register";
	});
});