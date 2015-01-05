var open = document.getElementsByClassName("switch"),
	liste = document.getElementsByClassName("section__liste");
	i = 1;
	
open[0].addEventListener("click", function(){


	if(i==1){
	liste[0].classList.add("liste--open");
	liste[0].classList.remove("liste--close");
	i=2;	
	}
	else if(i==2)
	{
	liste[0].classList.remove("liste--open");
	liste[0].classList.add("liste--close");
	i=1;
	}
	
});