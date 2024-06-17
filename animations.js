function reveal() {
  var reveals = document.querySelectorAll(".reveal");
  var checkbox = document.getElementById("animation-checkbox");
  
  if(checkbox.checked ==  true){
		for (var i = 0; i < reveals.length; i++) {
		var windowHeight = window.innerHeight;
		var elementTop = reveals[i].getBoundingClientRect().top;
		var elementVisible = -100;
		
		if (elementTop < windowHeight - elementVisible) {
		  reveals[i].classList.add("active");
		} else {
		  reveals[i].classList.remove("active");
		}
	  }
  
  }
  
}

function openNav(){
	let width = screen.width;
	let avWidth = screen.availWidth;
	if( width <= 600  ||  avWidth  <=600){
		document.getElementById("nav-menu").style.width = "100%";
		document.getElementsByClassName("menu-i")[0].style.display = "none";
		document.getElementsByClassName("close-i")[0].style.display = "flex";
	}

}


function closeNav(){
	let width = screen.width;
	let avWidth = screen.availWidth;
	if( width <= 600  ||  avWidth  <=600){
		document.getElementById("nav-menu").style.width = "0px";
		document.getElementsByClassName("close-i")[0].style.display = "none";
		document.getElementsByClassName("menu-i")[0].style.display = "flex";
	}
	
}

function hideMenuButton(){
	let width = screen.width;
	let avWidth = screen.availWidth;
	if( width > 600 ){
		document.getElementsByClassName("close-i")[0].style.display = "none";
		document.getElementsByClassName("menu-i")[0].style.display = "none";
		document.getElementById("nav-menu").style.width = "100%";
	}else{
		document.getElementById("nav-menu").style.width = "";
		document.getElementsByClassName("menu-i")[0].style.display = "";
		document.getElementsByClassName("close-i")[0].style.display = "";
	}
}


window.onresize = hideMenuButton;

window.onload = reveal;
window.onscroll = reveal;

