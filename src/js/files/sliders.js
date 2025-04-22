export default function sliders() {
  const offerSlider = document.querySelector(".s-offer__slider");

  if (offerSlider) {
    const slider = new Swiper(offerSlider, {
      speed: 700,
      spaceBetween: 30,
      slidesPerView: "auto",
      autoplay: {
        delay: 3000,
      },
      breakpoints: {
        1366: {
          slidesPerView: 3,
          spaceBetween: 40,
        },
      },
    });
  }

  const teamSlider = document.querySelector(".s-team__slider");

  if (teamSlider) {
    const slider = new Swiper(teamSlider, {
      speed: 700,
      spaceBetween: 20,
      slidesPerView: "auto",
      autoplay: {
        delay: 2500,
      },
      navigation: {
        prevEl: ".s-team .slider-btn._prev",
        nextEl: ".s-team .slider-btn._next",
      },
      breakpoints: {
        1366: {
          spaceBetween: 20,
          slidesPerView: 4,
        },
        992: {
          spaceBetween: 20,
          slidesPerView: 3,
        },
      },
    });
  }

  const contactsInfoSlider = document.querySelector(".s-contacts-info__slider");

  if (contactsInfoSlider) {
    const contactsInfoSliderThum = document.querySelector(
      ".s-contacts-info__thumb-slider"
    );

    const sliderThumb = new Swiper(contactsInfoSliderThum, {
      speed: 700,
      spaceBetween: 15,
      slidesPerView: 3,
      breakpoints: {
        481: {
          spaceBetween: 20,
          slidesPerView: 4,
        },
      },
    });

    const slider = new Swiper(contactsInfoSlider, {
      speed: 700,
      spaceBetween: 20,
      autoplay: {
        delay: 3500,
      },
      navigation: {
        prevEl: ".s-contacts-info__slider-btn._prev",
        nextEl: ".s-contacts-info__slider-btn._next",
      },
      thumbs: {
        swiper: sliderThumb,
      },
      breakpoints: {},
    });
  }

  const processSlider = document.querySelector(".s-process__slider");

  if (processSlider) {
    const slider = new Swiper(processSlider, {
      speed: 700,
      spaceBetween: 20,
      slidesPerView: "auto",
      autoplay: {
        delay: 2500,
      },
      centeredSlides: true,
      initialSlide: 2,
      navigation: {
        prevEl: ".s-process .slider-btn._prev",
        nextEl: ".s-process .slider-btn._next",
      },
      scrollbar: {
        el: ".s-process .slider-scrollbar",
        draggable: true,
      },
      breakpoints: {
        768: {
          spaceBetween: 30,
          slidesPerView: "auto",
        },
      },
    });
  }
  const benfitSlider = document.querySelector(".s-benefit__slider");

  if (benfitSlider) {
    const slider = new Swiper(benfitSlider, {
      speed: 700,
      spaceBetween: 30,
      slidesPerView: "auto",
      grabCursor: true,
      loop: true,
      autoplay: {
        delay: 2500,
      },
      breakpoints: {
        768: {
          spaceBetween: 60,
          slidesPerView: "auto",
        }
      }
    });
  }
}
