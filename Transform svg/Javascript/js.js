var Bouton = document.getElementById ("Bouton"),
	Map = document.getElementById ("Map"),
	Liste = document.getElementById ("Liste");
	i = 1;
	
Bouton.addEventListener("click", function(){

	if(i==1){
		Map.classList.add("fadeout");
		Liste.classList.add("fadein");
		Map.classList.remove("fadein");
		Liste.classList.remove("fadeout");
		i=2;
	}
	else if(i==2)
	{
		Map.classList.add("fadein");
		Liste.classList.add("fadeout");
		Map.classList.remove("fadeout");
		Liste.classList.remove("fadein");
		i=1;
	}
	
});
