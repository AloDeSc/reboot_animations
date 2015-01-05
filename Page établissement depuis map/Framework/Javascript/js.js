var Bouton_Selection = document.getElementsByClassName("localisation"),
	Restaurant = document.getElementsByClassName("anim3__restaurant"),
	Closer = document.getElementsByClassName("anim3__closer");
	
	Bouton_Selection[0].addEventListener("click", function(){
	
	Bouton_Selection[0].classList.add("selection");
	Restaurant[0].classList.add("restaurant--open");
	Restaurant[0].classList.remove("restaurant--close");
});

	Closer[0].addEventListener("click", function(){
	Restaurant[0].classList.add("restaurant--close");
	Restaurant[0].classList.remove("restaurant--open");
	Bouton_Selection[0].classList.remove("selection");
});