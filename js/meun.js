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