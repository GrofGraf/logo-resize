initNavbar(150, 100, 0.25);
window.addEventListener("resize", function(){
	initNavbar(150, 100, 0.25);
});

function initNavbar(defaultSize, finalSize, resizeSpeed){
	navbarScroll(defaultSize, finalSize, resizeSpeed);
	document.addEventListener("scroll", function(){
		navbarScroll(defaultSize, finalSize, resizeSpeed);
	});
}

function navbarScroll(defaultSize, finalSize, resizeSpeed){
	var logo = document.getElementById("logo");
	position = window.pageYOffset || document.body.scrollTop;
	if(position == 0) logo.style = "height:" + defaultSize + "px;";
	if(position > 0) logo.style = "height:" + (defaultSize - position * resizeSpeed) + "px;";
	if(position > (defaultSize - finalSize) / resizeSpeed) logo.style = "height:" + finalSize + "px;"
}