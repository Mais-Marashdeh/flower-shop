window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 580 || document.documentElement.scrollTop > 580) {
    document.getElementById("sticky-menu").style.top = "0";
    document.getElementById("icons").style.visibility = "visible";
  } else {
    document.getElementById("sticky-menu").style.top = "-70px";
    document.getElementById("icons").style.visibility = "hidden";
  }
}

const totop = document.querySelector(".to-top");


window.addEventListener("scroll",()=>{
	if(window.pageYOffset > 100){
		totop.classList.add("active");
	}else{
		totop.classList.remove("active");
	}
})

var arr=["37.jpg","36.jpg","42.jpg"];
		var index = 0 ;

		function slider(argument) {
			var img = document.getElementById("imags");
			img.src ="imgs/"+ arr[index];
			index++;
			if (index==arr.length) 
				index=0;
				window.setTimeout("slider()",12000);
			
		}
