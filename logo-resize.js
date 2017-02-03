navbarScroll();
document.addEventListener("scroll", navbarScroll);
document.addEventListener("touchmove", navbarScroll);
function navbarScroll(){
	var logo = document.getElementById("logo");
	position = window.pageYOffset || document.body.scrollTop;
	if(position>60 && !logo.classList.contains("shrink")){
		logo.classList.add("shrink");
	}
	if(position<=60 && logo.classList.contains("shrink")){
		logo.classList.remove("shrink");
	}
}