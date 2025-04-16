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
}