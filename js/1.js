console.clear();

const { gsap } = window;

gsap.timeline()
	.set(".menu", { autoAlpha: 1 })
	.from(".menu__item-innertext", {
		delay: 1,
		duration: 0.85,
		yPercent: 125,
		stagger: 0.095,
		skewY: gsap.utils.wrap([-8, 8]),
		ease: "expo.out",
	})
	.set(".menu", { pointerEvents: "all" });

gsap.defaults({
	duration: 0.55,
	ease: "expo.out",
});

const menuItems = document.querySelectorAll(".menu__item");

menuItems.forEach((item) => {
	const imageWrapper = item.querySelector(".menu__item-image_wrapper");
	const imageWrapperBounds = imageWrapper.getBoundingClientRect();
	let itemBounds = item.getBoundingClientRect();

	const onMouseEnter = () => {
		gsap.set(imageWrapper, { scale: 0.8, yPercent: 100, rotation: -15 });
		gsap.to(imageWrapper, { opacity: 1, scale: 1, yPercent: 0, rotation: 0 });
	};
	const onMouseLeave = () => {
		gsap.to(imageWrapper, { opacity: 0, yPercent: -50, scale: 0.8, rotation: -15 });
	};
	const onMouseMove = ({ x, y }) => {
		let yOffset = itemBounds.top / imageWrapperBounds.height;
		yOffset = gsap.utils.mapRange(0, 1.5, -150, 150, yOffset);
		gsap.to(imageWrapper, {
			duration: 1.25,
			x: Math.abs(x - itemBounds.left) - imageWrapperBounds.width / 1.55,
			y: Math.abs(y - itemBounds.top) - imageWrapperBounds.height / 2 - yOffset,
		});
	};

	item.addEventListener("mouseenter", onMouseEnter);
	item.addEventListener("mouseleave", onMouseLeave);
	item.addEventListener("mousemove", onMouseMove);

	window.addEventListener("resize", () => {
		itemBounds = item.getBoundingClientRect();
	});
});
// ---------버튼------------------
$( ".button-group > div" ).click(function() {
  $('.button-group > div.active').not(this).removeClass('active');
  $( this ).toggleClass( "active" );
});

console.clear();
// ----------------따라다니는 오버--------------------------

$(document).ready(function(){
  
  var mousePos = {};

 function getRandomInt(min, max) {
   return Math.round(Math.random() * (max - min + 1)) + min;
 }
  
  $(window).mousemove(function(e) {
    mousePos.x = e.pageX;
    mousePos.y = e.pageY;
  });
  
  $(window).mouseleave(function(e) {
    mousePos.x = -1;
    mousePos.y = -1;
  });
  // -------------크기------
  var draw = setInterval(function(){
    if(mousePos.x > 0 && mousePos.y > 0){
      
      var range = 35;
      
      var color = "background: rgb("+getRandomInt(0,255)+","+getRandomInt(0,255)+","+getRandomInt(0,255)+");";
      
      var sizeInt = getRandomInt(10, 30);
      size = "height: " + sizeInt + "px; width: " + sizeInt + "px;";
      
      var left = "left: " + getRandomInt(mousePos.x-range-sizeInt, mousePos.x+range) + "px;";
      
      var top = "top: " + getRandomInt(mousePos.y-range-sizeInt, mousePos.y+range) + "px;"; 

      var style = left+top+color+size;
      $("<div class='ball' style='" + style + "'></div>").appendTo('#wrap').one("webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend", function(){$(this).remove();}); 
    }
  }, 1);
});

// ---------------------시계-----------------------------------------
setInterval(clock, 1000);
function clock() {
    const date = new Date();

    const hours = ((date.getHours() + 11) % 12 + 1);
    const minutes = date.getMinutes();
    const seconds = date.getSeconds();

    const hour = hours * 30;
    const minute = minutes * 6;
    const second = seconds * 6;
    document.querySelector(".hr").innerHTML = hours;
    document.querySelector(".min").innerHTML = minutes;
    console.log("Hour: " + hours + " Minute: " + minutes + " Second: " + second);

    document.querySelector('#hour').style.transform = `rotate(${hour}deg)`;
    document.querySelector('#minute').style.transform = `rotate(${minute}deg)`;
    document.querySelector('#second').style.transform = `rotate(${second}deg)`;
}

// ---------------------------------가로 스크롤--------------------------
