/* слайдер на странице товара */
$('.item-main__slider-for').slick({
	slidesToShow: 1,
	slidesToScroll: 1,
	arrows: true,
	dots: false,
	fade: true,
	asNavFor: '.item-main__slider-nav',
	prevArrow: '.item-main__slider-prev',
	nextArrow: '.item-main__slider-next'
});
$('.item-main__slider-nav').slick({
	slidesToShow: 3,
	slidesToScroll: 1,
	asNavFor: '.item-main__slider-for',
	dots: false,
	vertical: false,
	focusOnSelect: true,
	arrows: false,
	mobileFirst: true,
	responsive: [{
		breakpoint: 1,
		settings: {
		}
	}, {
		breakpoint: 992,
		settings: {
			vertical: true,
		}
	}]
});


const mainNavigation = document.querySelector(".main-navigation");
const toggler = mainNavigation.querySelector(".navbar-toggler");

const openSideNav = () => mainNavigation.classList.add("active");
const closeSideNav = () => mainNavigation.classList.remove("active");
toggler.addEventListener("click", openSideNav);

if (toggler) {
	const body = document.querySelector('body');
	const close = document.querySelector('.sidebar-close');
	toggler.addEventListener("click", function (e) {
		body.classList.add('active');
	});
	close.addEventListener("click", function (e) {
		body.classList.remove('active');
		mainNavigation.classList.remove('active');
	});
};


$('.reviews__slider').slick({
	slidesToShow: 2,
	slidesToScroll: 1,
	arrows: true,
	dots: true,
	appendDots: $('.reviews__dots'),
	prevArrow: '.reviews__slider-prev',
	nextArrow: '.reviews__slider-next',
	responsive: [{
		breakpoint: 992,
		settings: {
			slidesToShow: 1,
		}
	}]
});

$('.video-index__slider').slick({
	slidesToShow: 3,
	slidesToScroll: 1,
	arrows: false,
	dots: true,
	appendDots: $('.video-index__dots'),
	responsive: [{
		breakpoint: 992,
		settings: {
			slidesToShow: 1,
		}
	}]
});


/* Галерея фотографий */
$(document).ready(function () {
	const gallery = document.querySelector(".documents__item");
	if (gallery) {
		$(".documents__item").magnificPopup({
			type: 'image',
			gallery: {
				enabled: true
			}
		});
	}
});


$('.main__slider').slick({
	slidesToShow: 1,
	slidesToScroll: 1,
	arrows: true,
	dots: true,
	fade: true,
	appendDots: $('.main__dots'),
	prevArrow: '.main__slider-prev',
	nextArrow: '.main__slider-next',
});

$('.upcoming-events__slider').slick({
	slidesToShow: 3,
	slidesToScroll: 1,
	infinite: true,
	arrows: true,
	prevArrow: '.upcoming-events__slider-prev',
	nextArrow: '.upcoming-events__slider-next',
	responsive: [{
		breakpoint: 992,
		settings: {
			slidesToShow: 2,
		}
	}]
});

if (screen.width > 992) {
	var element = document.getElementById('header');
	window.addEventListener('scroll', function () {
		if (window.scrollY > 50) {
			element.classList.add("scroll");
		} else {
			element.classList.remove("scroll");
		}
	});
}

const slider = document.querySelector('.running__line');
let isDown = false;
let startX;
let scrollLeft;

slider.addEventListener('mousedown', (e) => {
	isDown = true;
	slider.classList.add('active');
	startX = e.pageX - slider.offsetLeft;
	scrollLeft = slider.scrollLeft;
});
slider.addEventListener('mouseleave', () => {
	isDown = false;
	slider.classList.remove('active');
});
slider.addEventListener('mouseup', () => {
	isDown = false;
	slider.classList.remove('active');
});
slider.addEventListener('mousemove', (e) => {
	if (!isDown) return;
	e.preventDefault();
	const x = e.pageX - slider.offsetLeft;
	const walk = (x - startX) * 1; //scroll-fast
	slider.scrollLeft = scrollLeft - walk;
	console.log(walk);
});

