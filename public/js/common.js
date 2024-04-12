"use strict";

import Swiper from '../libs/swiper/swiper-bundle.min.mjs';
import JSCCommon from "./JSCCommon.js";

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

  const sProductSlider = new Swiper('.slider-1 .sFeatures__swiper--js', {
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
      }
    }
	});

  const swiperTabs1 = new Swiper('.tabs-slider--js1', {
		slidesPerView: 'auto',
		freeMode: true,
		watchOverflow: true
	});
  const swiperTabs2 = new Swiper('.tabs-slider--js2', {
		slidesPerView: 'auto',
		freeMode: true,
		watchOverflow: true
	});
  const swiperTabs3 = new Swiper('.tabs-slider--js3', {
		slidesPerView: 'auto',
		freeMode: true,
		watchOverflow: true
	});
  const swiperTabs4 = new Swiper('.tabs-slider--js4', {
		slidesPerView: 'auto',
		freeMode: true,
		watchOverflow: true
	});

  const sProductSlider2 = new Swiper('.slider-2 .sFeatures__swiper--js', {
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
		// 	nextEl: '.slider-2 .swiper-button-next',
		// 	prevEl: '.slider-2 .swiper-button-prev',
		// },
    breakpoints: {
      992: {
        spaceBetween: 30,
      }
    }
	});

  
  const sAdvantagesSlider = new Swiper('.sAdvantages__swiper--js', {
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
      }
    }
	});

  const sProdSlider = new Swiper('.sProductSlider__swiper--js', {
		spaceBetween: 20,
    activeIndex: 2,
		// watchOverflow: true,
		loop: true,
    direction: 'vertical',
		// spaceBetween: 0,
		slidesPerView: 4,
		touchRatio: 0.4,
    // thumbs: {
    //   swiper: thumbsSwiper
    // },
		slideToClickedSlide: true,
    breakpoints: {
      992: {
        spaceBetween: 30,
      }
    }
	});


const buttons = document.querySelectorAll('.swiper .tabs__btn');

buttons.forEach(button => {
  button.addEventListener('click', () => {
    const parent = button.closest('.section-title');

    if (parent) {
      const image = parent.querySelector('img');
      const buttonText = button.textContent.trim().toLowerCase();
      switch(buttonText) {
        case 'описание':
          image.src = 'img/info.png';
          break;
        case 'характеристики':
          image.src = 'img/feature.png';
          break;
        case 'особенности':
          image.src = 'img/tablet.png';
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
