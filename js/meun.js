console.clear();

const { gsap } = window;

const btn = document.querySelector(".menu-btn");

btn.addEventListener("click", () => {
	if (btn.classList.contains("active")) {
		btn.classList.remove("active");
		hide();
	} else {
		btn.classList.add("active");
		show();
	}
});

function show() {
	let tl = gsap.timeline();

	gsap.set(".nav__inner, .menu-btn", {
		pointerEvents: "none",
	});

	tl.fromTo(
		".nav--transition-slide",
		{
			scaleX: 0,
			transformOrigin: "left center",
			display: "block"
		},
		{
			duration: 0.5,
			scaleX: 1,
			ease: "Expo.inOut",
		}
	)
		.set(".nav__inner, .menu-btn", {
		pointerEvents: "all",
	})
		.fromTo(
		".nav--item-line",
		{
			scaleX: 0,
			transformOrigin: "left center",
		},
		{
			duration: 0.65,
			scaleX: 1,
			ease: "Expo.inOut",
			stagger: 0.15,
		}
	)
		.fromTo(
		".nav--link",
		{
			translateY: "100%",
		},
		{
			duration: 2.25,
			translateY: 0,
			ease: "elastic.inOut",
			stagger: 0.15,
		},
		"-=1.65"
	);
}

function hide() {
	let tl = gsap.timeline();

	gsap.set(".nav__inner, .menu-btn", {
		pointerEvents: "none",
	});

	tl.to(".nav--item-line", {
		duration: 0.6,
		scaleX: 0,
		transformOrigin: "right center",
		ease: "Expo.inOut",
		stagger: -0.15,
	})
		.to(
		".nav--link",
		{
			duration: 0.35,
			translateY: "100%",
			ease: "Expo.inOut",
			stagger: -0.15,
		},
		0
	)
		.to(".nav--transition-slide", {
		duration: 0.5,
		transformOrigin: "right center",
		scaleX: 0,
		ease: "Expo.inOut",
	})
		.set(" .menu-btn", {
		pointerEvents: "all",
	});
}

// -----------------프로필 메뉴
$('.share-alt').on('click', function(e){
	$(".branch").removeClass("no-animation");
	$('.branch').toggleClass("open");
});

$('.social').on('click', function(e){
	$(".container").removeClass("no-animation");
	$(".container").toggleClass("open");
});

$('.share').on('click', function(e){
	$(".float-circle").removeClass("no-animation");
	$(".float-circle").toggleClass("open");
});

// -------------햄버거

var inTL;
var selectT;
var selected = false;

var button = $("#content");
button.click(onClick);

var line1 = $("#line1");
var line2 = $("#line2");
var line3 = $("#line3");

build();

function build(){
  	TweenMax.set([line1, line2, line3], {scaleX:0.1, transformOrigin:"50% 50%"});
		
     intTL = new TimelineMax({onComplete:onOpened});
		intTL.pause();
     intTL.addLabel("enter", 0);
     intTL.addLabel("expand", 0.4);
     intTL.addLabel("position", 0.6);
		
     intTL.add(TweenMax.to([line1, line2, line3], 0.45, {y:28, ease:Power4.easeIn}), "enter");
  
		intTL.add(TweenMax.to([line1, line2, line3], 0.45, {scaleX:1, ease:Power4.easeOut}), "expand");
  
		intTL.add(TweenMax.to(line1, 0.4, {scaleX:1, ease:Power4.easeOut}), "position");
		intTL.add(TweenMax.to(line2, 0.4, {scaleX:1, y:18, ease:Power4.easeOut}), "position");
		intTL.add(TweenMax.to(line3, 0.4, {scaleX:1, y:8, ease:Power4.easeOut}), "position");
		intTL.play();
}

function onOpened(){
   selectT = new TimelineMax({});
		selectT.pause();
		selectT.addLabel("enter", 0);
		selectT.addLabel("join", 0.25);
		selectT.addLabel("rotate", 0.5);
		selectT.addLabel("end", 0.75);

		selectT.add(TweenMax.to(line3, 0.25, {y:3, ease:Power3.easeOut}), "enter");
		selectT.add(TweenMax.to(line1, 0.25, {y:33, ease:Power3.easeOut}), "enter");

		selectT.add(TweenMax.to(line3, 0.25, {y:18, ease:Power3.easeOut}), "join");
		selectT.add(TweenMax.to(line1, 0.25, {y:18, ease:Power3.easeOut}), "join");

		selectT.add(TweenMax.to(line3, 0.25, {rotation:630, backgroundColor:0x000000, ease:Power3.easeOut}), "rotate");
		selectT.add(TweenMax.to(line2, 0.25, {rotation:630, backgroundColor:0x000000, ease:Power3.easeOut}), "rotate");
		selectT.add(TweenMax.to(line1, 0.25, {rotation:630, backgroundColor:0x000000, ease:Power3.easeOut}), "rotate");

		selectT.add(TweenMax.to(line3, 0.25, {rotation:585, ease:Power3.easeOut}), "end");
		selectT.add(TweenMax.to(line2, 0.25, {rotation:675, ease:Power3.easeOut}), "end");
		selectT.add(TweenMax.to(line1, 0.25, {rotation:675, ease:Power3.easeOut}), "end");
}

function onClick(e){
  if(selected){
	  selected = false;
	  selectT.reverse();
	}else{
	 selected = true;
	 selectT.play();
  }
}