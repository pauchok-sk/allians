export default function sliders() {
  const offerSlider = document.querySelector(".s-offer__slider");

  if (offerSlider) {
    const slider = new Swiper(offerSlider, {
      speed: 700, 
      spaceBetween: 30,
      slidesPerView: "auto",
      autoplay: {
        delay: 3000
      },
      breakpoints: {
        1366: {
          slidesPerView: 3, 
          spaceBetween: 40,
        }
      }
    })
  }

  const teamSlider = document.querySelector(".s-team__slider");

  if (teamSlider) {
    const slider = new Swiper(teamSlider, {
      speed: 700, 
      spaceBetween: 20,
      slidesPerView: "auto",
      autoplay: {
        delay: 2500
      },
      navigation: {
        prevEl: ".s-team .slider-btn._prev",
        nextEl: ".s-team .slider-btn._next"
      },
      breakpoints: {
       1366: {
        spaceBetween: 20,
        slidesPerView: 4,
       },
       992: {
        spaceBetween: 20,
        slidesPerView: 3,
       }
      }
    })
  }
}