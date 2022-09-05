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

// ---------------------------------카드 슬라이드--------------------------
var bg = document.querySelector('.item-bg');
var items = document.querySelectorAll('.news__item');
var item = document.querySelector('.news__item');

function cLog(content) {
    console.log(content)
}

if($(window).width() > 800) {
    $(document).on("mouseover", ".news__item", function (_event, _element) {

        var newsItem = document.querySelectorAll('.news__item');
        newsItem.forEach(function (element, index) {
            element.addEventListener('mouseover', function () {
                var x = this.getBoundingClientRect().left;
                var y = this.getBoundingClientRect().top;
                var width = this.getBoundingClientRect().width;
                var height = this.getBoundingClientRect().height;

                $('.item-bg').addClass('active');
                $('.news__item').removeClass('active');
                // $('.news__item').removeClass('active');


                bg.style.width = width + 'px';
                bg.style.height = height + 'px';
                bg.style.transform = 'translateX(' + x + 'px ) translateY(' + y + 'px)';
            });

            element.addEventListener('mouseleave', function () {
                $('.item-bg').removeClass('active');
                $('.news__item').removeClass('active');
            });

        });

    });
}


var swiper = new Swiper('.news-slider', {
    effect: 'coverflow',
    grabCursor: true,
    loop: true,
    centeredSlides: true,
    keyboard: true,
    spaceBetween: 0,
    slidesPerView: 'auto',
    speed: 300,
    coverflowEffect: {
        rotate: 0,
        stretch: 0,
        depth: 0,
        modifier: 3,
        slideShadows: false
    },
    breakpoints: {
        480: {
            spaceBetween: 0,
            centeredSlides: true
        }
    },
    simulateTouch: true,
    navigation: {
        nextEl: '.news-slider-next',
        prevEl: '.news-slider-prev'
    },
    pagination: {
        el: '.news-slider__pagination',
        clickable: true
    },
    on: {
        init: function () {
            var activeItem = document.querySelector('.swiper-slide-active');

            var sliderItem = activeItem.querySelector('.news__item');

            $('.swiper-slide-active .news__item').addClass('active');

            var x = sliderItem.getBoundingClientRect().left;
            var y = sliderItem.getBoundingClientRect().top;
            var width = sliderItem.getBoundingClientRect().width;
            var height = sliderItem.getBoundingClientRect().height;


            $('.item-bg').addClass('active');

            bg.style.width = width + 'px';
            bg.style.height = height + 'px';
            bg.style.transform = 'translateX(' + x + 'px ) translateY(' + y + 'px)';
        }
    }
});

swiper.on('touchEnd', function () {
    $('.news__item').removeClass('active');
    $('.swiper-slide-active .news__item').addClass('active');
});

swiper.on('slideChange', function () {
    $('.news__item').removeClass('active');
});

swiper.on('slideChangeTransitionEnd', function () {
    $('.news__item').removeClass('active');
    var activeItem = document.querySelector('.swiper-slide-active');

    var sliderItem = activeItem.querySelector('.news__item');

    $('.swiper-slide-active .news__item').addClass('active');

    var x = sliderItem.getBoundingClientRect().left;
    var y = sliderItem.getBoundingClientRect().top;
    var width = sliderItem.getBoundingClientRect().width;
    var height = sliderItem.getBoundingClientRect().height;


    $('.item-bg').addClass('active');

    bg.style.width = width + 'px';
    bg.style.height = height + 'px';
    bg.style.transform = 'translateX(' + x + 'px ) translateY(' + y + 'px)';
});
// -----------------슬라이드-------------------------------
class FancyNav {
  constructor({ btns, nav, highlightColor, backgroundColor, strokeWidth }) {
    this.btns = btns;
    this.nav = nav;
    this.highlightColor = highlightColor;
    this.strokeWidth = strokeWidth;
    this.backgroundColor = backgroundColor;
    this.transparent = this.alphaFromColor(highlightColor, 0);
  }

  render() {
    const svg = Snap(this.nav.clientWidth, this.nav.clientHeight);
    this.svgBtns = this.btns.map(btn => this.renderSVGBtns(btn, svg));

    const btnBBox = this.svgBtns[0].getBBox();
    this.offset = this.svgBtns[1].getBBox().cx - btnBBox.cx;
    this.magicPath = this.renderMagicPath(svg, btnBBox);
    this.circumference = 2 * Math.PI * btnBBox.r1; // assume circle

    this.setCurrent();
    this.bindBtnEvents();
    this.nav.appendChild(svg.node);
  }

  renderSVGBtns(btn, svg) {
    // Hide html btns
    btn.style.opacity = 0;
    const x = btn.offsetLeft + btn.offsetWidth / 2;
    const y = btn.offsetTop + btn.offsetHeight / 2;
    const r = btn.offsetHeight / 2; // assume circle

    const outerCircle = svg.
    circle(x, y, r).
    attr({
      fill: this.transparent,
      stroke: this.highlightColor,
      strokeWidth: 2 });

    const innerCircle = svg.
    circle(x, y, r / 4).
    attr({
      fill: this.highlightColor,
      stroke: this.transparent,
      strokeWidth: 0,
      class: 'hoverIndicator',
      transform: 's0,0' });


    return svg.group(outerCircle, innerCircle);
  }

  renderMagicPath(svg, btnBBox) {
    const pathSegments = [
    `M${btnBBox.cx},${btnBBox.y2}`].
    concat(
    this.svgBtns.reduce((acc, b, index, arr) => {
      const res = [
      `a${btnBBox.r1},${btnBBox.r1},0,0,0,0,-${btnBBox.height}`, // left circle
      `a${btnBBox.r1},${btnBBox.r1},0,0,0,0,${btnBBox.height}` // right circle
      ];
      if (index < arr.length - 1) {
        res.push(`l${this.offset},0`); // path to next circle, not on last one
      }
      return acc.concat(res);
    }, []));


    return svg.
    path(pathSegments.join(' ')).
    attr({
      stroke: this.highlightColor,
      strokeWidth: this.strokeWidth,
      strokeLinecap: 'round',
      fill: this.transparent });

  }

  setCurrent() {
    const pathLength = Snap.path.getTotalLength(this.magicPath.attr('d')); // fixes length in Firefox
    // strokeDasharray: `${this.circumference - this.strokeWidth / 4}, ${pathLength}`,
    this.magicPath.attr({
      strokeDasharray: `${this.circumference - this.strokeWidth / 4}, ${pathLength}`,
      strokeDashoffset: 0 });

  }

  goToIndex(index) {
    const dashOffset = -index * (this.circumference + this.offset);
    Snap.animate(this.removePx(this.magicPath.attr('strokeDashoffset')), dashOffset, v => {
      this.magicPath.attr({ strokeDashoffset: v });
    }, 600, mina.easeinout);
  }

  bindBtnEvents() {
    this.btns.forEach((btn, index) => {
      btn.addEventListener('click', () => this.handleClick(index), false);
      btn.addEventListener('mouseover', () => this.showFocus(index), false);
      btn.addEventListener('focus', () => this.showFocus(index), false);
      btn.addEventListener('mouseout', () => this.removeFocus(index), false);
      btn.addEventListener('blur', () => this.removeFocus(index), false);
    });
  }

  showFocus(index) {
    this.svgBtns[index].
    select('.hoverIndicator').
    stop().
    animate({ transform: 's1,1' }, 225, mina.easein);
  }

  removeFocus(index) {
    this.svgBtns[index].
    select('.hoverIndicator').
    stop().
    animate({ transform: 's0,0' }, 175, mina.easeout);
  }

  handleClick(index) {
    this.goToIndex(index);
  }

  removePx(str) {
    return parseInt(str.replace('px', ''), 10);
  }

  alphaFromColor(c, alpha) {
    const { r, g, b } = Snap.color(c);
    return `rgba(${r}, ${g}, ${b}, ${alpha})`;
  }}


class Gallery {
  constructor({ container, items, btns, nav }) {
    this.container = container;
    this.items = items;
    this.btns = btns;
    this.nav = nav;
    this.itemWidth = this.items[0].clientWidth;
  }

  render() {
    this.btns.forEach((btn, index) => {
      btn.addEventListener('click', () => this.goToIndex(index), false);
    });

    const fancyNav = new FancyNav({
      btns: this.btns,
      nav: this.nav,
      highlightColor: '#00e',
      backgroundColor: '#FFFFFF',
      strokeWidth: 10 }).
    render();
  }

  goToIndex(index) {
    this.container.style.transform = `translateX(${-index * this.itemWidth}px)`;
  }}


const gallery = new Gallery({
  container: document.querySelector('.js-container'),
  nav: document.querySelector('.js-nav'),
  items: Array.from(document.querySelectorAll('.js-item')),
  btns: Array.from(document.querySelectorAll('.js-button')) }).
render();
// ----------------------------스크롤----------------------


gsap.set(".circle", { yPercent: -5});
gsap.set(".dotsBlue", { yPercent: 10});
gsap.set(".owlHorned", { yPercent: -20});
gsap.set(".clusterGreat", { yPercent: 5});

gsap.to(".circle", {
  yPercent: 5,
  ease: "none",
  scrollTrigger: {
    trigger: ".clusterGreat",
    scrub: 1
  }, 
});

gsap.to(".dotsBlue", {
  yPercent: -10,
  ease: "none",
  scrollTrigger: {
    trigger: ".clusterGreat",
    scrub: 1
  }, 
});


gsap.to(".owlHorned", {
  yPercent: 20,
  ease: "none",
  scrollTrigger: {
    trigger: ".clusterGreat",
    scrub: 1
  }, 
});

gsap.to(".caption", {
  yPercent: 100,
  ease: "none",
  scrollTrigger: {
    trigger: ".clusterGreat",

    end: "bottom center",
    scrub: 1
  }, 
});

gsap.to(".clusterGreat", {
  yPercent: -5,
  ease: "none",
  scrollTrigger: {
    trigger: ".clusterGreat",
    end: "bottom center",
    scrub: 1
  }, 
});


gsap.set(".triangle", { yPercent: 25, rotation:-90});
gsap.set(".dotsWhite", { yPercent: 10});
gsap.set(".owlBurrowing", { yPercent: -20});
gsap.set(".clusterBurrowing", { yPercent: 5});

gsap.to(".triangle", {
  yPercent: -5,
  rotation: 40,
  ease: "none",
  scrollTrigger: {
    trigger: ".clusterBurrowing",
    scrub: 1
  }, 
});

gsap.to(".dotsWhite", {
  yPercent: -10,
  ease: "none",
  scrollTrigger: {
    trigger: ".clusterBurrowing",
    scrub: 1
  }, 
});


gsap.to(".owlBurrowing", {
  yPercent: 20,
  ease: "none",
  scrollTrigger: {
    trigger: ".clusterBurrowing",
    scrub: 1
  }, 
});

gsap.to(".captionBurrowing", {
  yPercent: 200,
  ease: "none",
  scrollTrigger: {
    trigger: ".clusterBurrowing",

    end: "bottom center",
    scrub: 1
  }, 
});

gsap.to(".clusterBurrowing", {
  yPercent: -5,
  ease: "none",
  scrollTrigger: {
    trigger: ".clusterBurrowing",

    end: "bottom center",
    scrub: 1
  }, 
});

var tlSplitGreat = gsap.timeline({onComplete: () => {SplitGreat.revert()}}), 
    SplitGreat = new SplitText(".titleGreathorned", {type:"words,chars"}), 
    chars = SplitGreat.chars;


tlSplitGreat.from(chars, {
  duration: 0.8,
  opacity:0,
  y:10,
  ease:"circ.out",
  stagger: 0.02,
}, "+=0");



function setupSplits() {
  
var tlSplitBurrowing = gsap.timeline(), 
    SplitBurrowing = new SplitText(".titleBurrowing", {type:"words,chars"}), 
    chars = SplitBurrowing.chars;


tlSplitBurrowing.from(chars, {
  duration: 0.8,
  opacity:0,
  y:10,
  ease:"circ.out",
  stagger: 0.02,
scrollTrigger: {
    trigger: ".titleBurrowing",

    start: "top 75%",
   end: "bottom center",
    scrub:1
  }

}, "+=0");


  
};


ScrollTrigger.addEventListener("refresh", setupSplits);

setupSplits();
// -----------------퍼센트--------------------

const progressTag = document.querySelector('.progress')
const progressText = document.querySelector('p')
const bodyTag = document.querySelector('body')

document.addEventListener('scroll', () => {
  const pixels = window.pageYOffset
  const pageHeight = bodyTag.getBoundingClientRect().height
  const totalHeight = pageHeight - window.innerHeight
  const percentage = pixels / totalHeight
  
  progressTag.style.width = `${100 * percentage}%`
  
  if (pixels > 0) {
    progressText.innerHTML = `${Math.floor(100 * percentage)}` + '%'
  } 
  
  else {
    progressText.innerHTML = ''
  }
})

// ------------------------------에널리틱스

<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-9BXJWLR2BF');
</script>