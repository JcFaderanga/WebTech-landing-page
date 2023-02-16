
var menu = document.querySelector('.menu');
var visibility = false;
menu.addEventListener('click', ()=>{
	if(visibility == false){
		document.getElementById('nav-holder').style.display = "block";
		return visibility = true;
	}else{
		document.getElementById('nav-holder').style.display = "none";
		return visibility = false;
	}
	
});
