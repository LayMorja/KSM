/*
Документация по работе в шаблоне: 
Документация слайдера: https://swiperjs.com/
Сниппет(HTML): swiper
*/

// Подключаем слайдер Swiper из node_modules
// При необходимости подключаем дополнительные модули слайдера, указывая их в {} через запятую
// Пример: { Navigation, Autoplay }
import Swiper, { Navigation, Pagination, Thumbs, EffectFade } from 'swiper';
/*
Основниые модули слайдера:
Navigation, Pagination, Autoplay, 
EffectFade, Lazy, Manipulation
Подробнее смотри https://swiperjs.com/
*/

// Стили Swiper
// Базовые стили
import "../../scss/base/swiper.scss";
// Полный набор стилей из scss/libs/swiper.scss
// import "../../scss/libs/swiper.scss";
// Полный набор стилей из node_modules
// import 'swiper/css';

// Инициализация слайдеров
function initSliders() {
	// Перечень слайдеров
	// Проверяем, есть ли слайдер на стронице
	if (document.querySelector('.industry__slider') && document.querySelectorAll('.industry__slide').length > 4) { // Указываем скласс нужного слайдера
		// Создаем слайдер
		const industry = new Swiper('.industry__slider', {
			modules: [],
			observer: true,
			observeParents: true,
			slidesPerView: 'auto',
			spaceBetween: 30,
			autoHeight: true,
			speed: 800,
			breakpoints: {
				320: {
					slidesPerView: 1,
               centeredSlides: true,
               spaceBetween: 30,
				},
				540: {
					slidesPerView: 'auto',
               centeredSlides: false,
            }
			},
			// События
			on: {
			}
		});
	}
	if (document.querySelector('.projects__slider') && document.querySelectorAll('.projects__slide').length > 3) { // Указываем скласс нужного слайдера
		// Создаем слайдер
      console.log(document.querySelectorAll('.projects__slider'), document.querySelectorAll('.projects__slider').length)
      if (document.querySelectorAll('.projects__slider').length > 1) {
         document.querySelectorAll('.projects__slider').forEach(slider => {
            const pagintaion = slider.closest('section').querySelector('.projects__pagination');
            const projects = new Swiper(slider, {
               modules: [Navigation, Pagination],
               observer: true,
               observeParents: true,
               slidesPerView: 3,
               spaceBetween: 30,
               speed: 800,
               loop: true,
               breakpoints: {
                  320: {
                     slidesPerView: 1,
                     centeredSlides: true,
                     spaceBetween: 30,
                  },
                  520: {
                     slidesPerView: 2,
                  },
                  768: {
                     spaceBetween: 40,
                  },
                  992: {
                     slidesPerView: 3,
                  }
               },
               pagination: {
                  el: pagintaion,
                  type: 'bullets',
                  clickable: true,
               },
               navigation: {
                  nextEl: '.projects__button-next',
                  prevEl: '.projects__button-prev',
               },
               on: {
                  init: function() {
                     this.navigation.$nextEl[0].classList.add('button-initialized');
                     this.navigation.$prevEl[0].classList.add('button-initialized');
                  }
               }
            });
         });
      } else {
         const projects = new Swiper('.projects__slider', {
            modules: [Navigation, Pagination],
            observer: true,
            observeParents: true,
            slidesPerView: 3,
            spaceBetween: 30,
            speed: 800,
            loop: true,
            breakpoints: {
               320: {
                  slidesPerView: 1,
                  centeredSlides: true,
                  spaceBetween: 30,
               },
               520: {
                  slidesPerView: 2,
               },
               768: {
                  spaceBetween: 40,
               },
               992: {
                  slidesPerView: 3,
               }
            },
            pagination: {
               el: '.projects__pagination',
               type: 'bullets',
               clickable: true,
            },
            navigation: {
               nextEl: '.projects__button-next',
               prevEl: '.projects__button-prev',
            },
            on: {
               init: function() {
                  this.navigation.$nextEl[0].classList.add('button-initialized');
                  this.navigation.$prevEl[0].classList.add('button-initialized');
               }
            }
         });      
      }
	}
	if (document.querySelector('.another-products__slider:not(.another-products__slider--mini)') && document.querySelectorAll('.another-products__slide').length > 1) { // Указываем скласс нужного слайдера
		new Swiper('.another-products__slider', {
			modules: [Pagination],
			slidesPerView: 2,
			spaceBetween: 40,
			speed: 800,
         pagination: {
            el: '.another-product__pagination',
            type: 'bullets',
            clickable: true,
         },
         breakpoints: {
            320: {
               slidesPerView: 1,
               centeredSlides: true,
               spaceBetween: 30,
            },
            520: {
               slidesPerView: 1.6,
            },
            780: {
               slidesPerView: 2,
            }
         },
		});
	}
	if (document.querySelector('.another-products__slider--mini') && document.querySelectorAll('.another-products__slide').length > 1) { // Указываем скласс нужного слайдера
		new Swiper('.another-products__slider', {
			modules: [Pagination],
			slidesPerView: 3,
			spaceBetween: 40,
			speed: 800,
         pagination: {
            el: '.another-product__pagination',
            type: 'bullets',
            clickable: true,
         },
         breakpoints: {
            320: {
               slidesPerView: 1,
               centeredSlides: true,
               spaceBetween: 30,
            },
            520: {
               slidesPerView: 1.6,
            },
            780: {
               slidesPerView: 3,
            }
         },
		});
	}
	if (document.querySelector('.reviews__slider') && document.querySelectorAll('.reviews__slide').length > 1) { // Указываем скласс нужного слайдера
		new Swiper('.reviews__slider', {
			modules: [Pagination],
			observer: true,
			observeParents: true,
			slidesPerView: 1,
			spaceBetween: 30,
			speed: 800,
         pagination: {
            el: '.reviews__pagination',
            type: 'bullets',
            clickable: true,
         },
		});
	}
   if (document.querySelector('.product-preview__slider') && document.querySelectorAll('.product-preview__slide').length > 3) {
      const products = new Swiper('.product-preview__slider', {
			modules: [Pagination],
			slidesPerView: 3,
         autoHeight: false,
			spaceBetween: 170,
         grabCursor: true,
         loop: true,
			speed: 800,
         centeredSlides: true,
         pagination: {
            el: '.product-preview__pagination',
            type: 'bullets',
            clickable: true,
         },
         breakpoints: {
            320: {
               slidesPerView: 1,
               spaceBetween: 30,
            },
            640: {
               slidesPerView: 2,
            },
            992: {
               slidesPerView: 3,
               spaceBetween: 50,
            },
            1160: {
               spaceBetween: 170,
            }
         }
		});
   }
   if (document.querySelector('.device__slider') && document.querySelectorAll('.device__slide').length > 1) {
      const thumbsSlider = new Swiper('.device-mini__slider', {
			modules: [Thumbs],
			slidesPerView: 3,
         autoHeight: false,
			spaceBetween: 40,
         grabCursor: true,
         loop: true,
			speed: 800,
         centeredSlides: true,
         breakpoints: {
            320: {
               spaceBetween: 15,
            },
            640: {
               spaceBetween: 30,
            },
            992: {
               spaceBetween: 40,
            }
         }
		});
      const bigSlider = new Swiper('.device__slider', {
			modules: [Thumbs],
			slidesPerView: 1,
         autoHeight: false,
			spaceBetween: 30,
         grabCursor: true,
         loop: true,
			speed: 800,
         centeredSlides: true,
         thumbs: {
            swiper: thumbsSlider
         },

		});

   }
   if (document.querySelector('.project-main__slider') && document.querySelectorAll('.project-main__slide').length > 1) {
      new Swiper('.project-main__slider', {
			modules: [Navigation, Pagination],
			slidesPerView: 1,
         autoHeight: false,
			spaceBetween: 30,
         grabCursor: true,
         loop: true,
			speed: 800,
         pagination: {
            el: '.project-main__pagination',
            type: 'bullets',
            clickable: true,
         },
         navigation: {
            nextEl: '.project-main__button-next',
            prevEl: '.project-main__button-prev',
         },
         on: {
            init: function() {
               this.navigation.$nextEl[0].classList.add('button-initialized');
               this.navigation.$prevEl[0].classList.add('button-initialized');
            }
         }
		});
   }
   if (document.querySelector('.news-slider__slider') && document.querySelectorAll('.news-slider__slide').length > 1) {
      new Swiper('.news-slider__slider', {
			modules: [Navigation, Pagination],
			slidesPerView: 1,
         autoHeight: false,
			spaceBetween: 30,
			speed: 800,
         pagination: {
            el: '.news-slider__pagination',
            type: 'bullets',
            clickable: true,
         },
         navigation: {
            nextEl: '.news-slider__button-next',
            prevEl: '.news-slider__button-prev',
         },
         on: {
            init: function() {
               this.navigation.$nextEl[0].classList.add('button-initialized');
               this.navigation.$prevEl[0].classList.add('button-initialized');
            }
         }
		});
   }
   if (document.querySelector('.history__slider') && document.querySelectorAll('.history__slide').length > 1) {
      const infoSlider = new Swiper('.history-info__slider', {
			modules: [Thumbs, EffectFade],
			slidesPerView: 1,
         loop: true,
			speed: 800,
         spaceBetween: 30,
         allowTouchMove: false,
         autoHeight: true,
         effect: 'fade',
         fadeEffect: {
            crossFade: true,
         },
		});
      const historySlider = new Swiper('.history__slider', {
			modules: [Thumbs],
			slidesPerView: 5,
         centeredSlides: true,
         loop: true,
			speed: 800,
         grabCursor: true,
         thumbs: {
            swiper: infoSlider,
         },
         breakpoints: {
            320: {
               slidesPerView: 1,
            },
            380: {
               slidesPerView: 3,
            },
            560: {
               slidesPerView: 5,
            },
         }
		});
   }
}

document.addEventListener("DOMContentLoaded", function (e) {
	// Запуск инициализации слайдеров
	initSliders();
	// Запуск инициализации скролла на базе слайдера (по классу swiper_scroll)
	//initSlidersScroll();
});