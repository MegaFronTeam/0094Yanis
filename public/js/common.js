"use strict";

// import Swiper from '../libs/swiper/swiper-bundle.min.mjs';
// import JSCCommon from "./JSCCommon.js";

const $ = jQuery;

function eventHandler() {
	JSCCommon.init();

	function whenResize() {
		JSCCommon.setFixedNav();
	}

	window.addEventListener(
		"scroll",
		() => {
			JSCCommon.setFixedNav();
		},
		{passive: true}
	);
	window.addEventListener("resize", whenResize, {passive: true});

	whenResize();

	let defaultSl = {
		spaceBetween: 0,
		lazy: {
			loadPrevNext: true,
		},
		watchOverflow: true,
		loop: true,
		navigation: {
			nextEl: ".swiper-button-next",
			prevEl: ".swiper-button-prev",
		},
		pagination: {
			el: " .swiper-pagination",
			type: "bullets",
			clickable: true,
			// renderBullet: function (index, className) {
			// 	return '<span class="' + className + '">' + (index + 1) + '</span>';
			// }
		},
	};

	new Swiper(".breadcrumb-slider--js", {
		slidesPerView: "auto",
		freeMode: true,
		watchOverflow: true,
	});

	const swiper4 = new Swiper(".sBanners__slider--js", {
		// slidesPerView: 5,
		...defaultSl,
		slidesPerView: "auto",
		freeMode: true,
		loopFillGroupWithBlank: true,
		touchRatio: 0.2,
		slideToClickedSlide: true,
		freeModeMomentum: true,
	});

	const sFamiliarSlider = new Swiper(".sFamiliar-slider-js", {
		spaceBetween: 30,
		slidesPerView: 1,
		breakpoints: {
			575: {
				slidesPerView: 2,
			},
			1200: {
				slidesPerView: 4,
			},
		},
		// Navigation arrows
		navigation: {
			nextEl: ".arrow2-next",
			prevEl: ".arrow2-prev",
		},
		//pagination
		// pagination: {
		//   el: slider.querySelector(".action-slider-puging"),
		//   clickable: true,
		// },
	}); //

	let prodCardThumb = new Swiper(".sProdCard-thumb-js", {
		slidesPerView: 4,
		spaceBetween: 0,
	});
	let prodCardSlider = new Swiper(".sProdCard-slider-js", {
		spaceBetween: 30,
		thumbs: {
			swiper: prodCardThumb,
		},
		loop: true,
	}); //

	const sProductCard = new Swiper(".m-content__slider--js", {
		spaceBetween: 5,
		watchOverflow: true,
		// spaceBetween: 0,
		slidesPerView: 1,
		// freeMode: true,
		// loopFillGroupWithBlank: true,
		touchRatio: 0.4,
		slideToClickedSlide: true,
		// freeModeMomentum: true,
		navigation: {
			nextEl: ".swiper-button-next",
			prevEl: ".swiper-button-prev",
		},
		pagination: {
			el: ".swiper-pagination",
			type: "bullets",
		},
	});

	const sProductSlider = new Swiper(".slider-1 .sFeatures__swiper--js", {
		spaceBetween: 5,
		watchOverflow: true,
		// spaceBetween: 0,
		slidesPerView: "auto",
		// freeMode: true,
		// loopFillGroupWithBlank: true,
		touchRatio: 0.4,
		slideToClickedSlide: true,
		// freeModeMomentum: true,
		// navigation: {
		// 	nextEl: '.slider-1 .swiper-button-next',
		// 	prevEl: '.slider-1 .swiper-button-prev',
		// },
		breakpoints: {
			992: {
				spaceBetween: 30,
			},
		},
	});

	const swiperTabs1 = new Swiper(".tabs-slider--js1", {
		slidesPerView: "auto",
		freeMode: true,
		watchOverflow: true,
	});
	const swiperTabs2 = new Swiper(".tabs-slider--js2", {
		slidesPerView: "auto",
		freeMode: true,
		watchOverflow: true,
	});
	const swiperTabs3 = new Swiper(".tabs-slider--js3", {
		slidesPerView: "auto",
		freeMode: true,
		watchOverflow: true,
	});
	const swiperTabs4 = new Swiper(".tabs-slider--js4", {
		slidesPerView: "auto",
		freeMode: true,
		watchOverflow: true,
	});

	const sProductSlider2 = new Swiper(".slider-2 .sFeatures__swiper--js", {
		spaceBetween: 5,
		watchOverflow: true,
		slidesPerView: "auto",
		touchRatio: 0.4,
		slideToClickedSlide: true,
		breakpoints: {
			992: {
				spaceBetween: 30,
			},
		},
	});

	const sAdvantagesSlider = new Swiper(".sAdvantages__swiper--js", {
		spaceBetween: 20,
		watchOverflow: true,
		loop: true,
		// spaceBetween: 0,
		slidesPerView: "auto",
		// freeMode: true,
		// loopFillGroupWithBlank: true,
		touchRatio: 0.4,
		slideToClickedSlide: true,
		// freeModeMomentum: true,
		breakpoints: {
			992: {
				spaceBetween: 30,
			},
		},
	});

	const sProdSlider = new Swiper(".sProductSlider__swiper--js", {
		spaceBetween: 0,
		watchOverflow: true,
		direction: "horizontal",
		freeMode: true,
		touchRatio: 0.4,
		// slideToClickedSlide: true,
		slidesPerView: "auto",
		freeMode: true,
		watchOverflow: true,
		breakpoints: {
			992: {
				spaceBetween: 30,
				direction: "vertical",
				slidesPerView: "auto",
				watchOverflow: false,
			},
		},
	});

	$(".cart-btn-js").click(function () {
		event.preventDefault();
		$(this).toggleClass("active");
		$(this).closest(".actions-col--js").toggleClass("active");
		$(this).closest(".hint-col-js").toggleClass("active"); //tippy update

		/*if (tippyInstance) {
      for (let item of tippyInstance) {
        item.setProps(tippySettings);
      }
    }*/
	});

	const wrapper = document.querySelector(".main-wrapper");
	wrapper.classList.remove("wrapper-hidden");

	AOS.init({
		disable: "mobile",
		// offset: 200,
		once: true,
		duration: 1000,
		easing: "ease-in-out",
		// delay: 100,
	});

	const buttons = document.querySelectorAll(".sFeatures .swiper .tabs__btn");

	buttons.forEach(button => {
		button.addEventListener("click", () => {
			const parent = button.closest(".section-title");

			if (parent) {
				const image = parent.querySelector("img");
				const buttonText = button.textContent.trim().toLowerCase();
				switch (buttonText) {
					case "описание":
						image.src = "img/info.png";
						break;
					case "характеристики":
						image.src = "img/feature.png";
						break;
					case "особенности":
						image.src = "img/tablet.png";
						break;
					default:
						break;
				}
			}
		});
	});
}

if (document.readyState !== "loading") {
	eventHandler();
} else {
	document.addEventListener("DOMContentLoaded", eventHandler);
}

// window.onload = function () {
// 	document.body.classList.add('loaded_hiding');
// 	window.setTimeout(function () {
// 		document.body.classList.add('loaded');
// 		document.body.classList.remove('loaded_hiding');
// 	}, 500);
// }
