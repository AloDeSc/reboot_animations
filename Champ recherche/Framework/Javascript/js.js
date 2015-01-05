var opener = document.getElementsByClassName("section__recherche"),
	closer = document.getElementsByClassName("section__closer"),
	clavier = document.getElementsByClassName("section__clavier"),
	miss = document.getElementsByClassName("section__main"),
	propositions = document.getElementsByClassName("section__propositions");

opener[0].addEventListener("click", function(){
	clavier[0].classList.add("clavier--open");
	propositions[0].classList.remove("propositions--close");
	propositions[0].classList.add("propositions--open");
});

closer[0].addEventListener("click", function(){
	clavier[0].classList.remove("clavier--open");
	propositions[0].classList.remove("propositions--open");
	propositions[0].classList.add("propositions--close");
});

miss[0].addEventListener("click", function(){
	clavier[0].classList.remove("clavier--open");
	propositions[0].classList.remove("propositions--open");
	propositions[0].classList.add("propositions--close");
});