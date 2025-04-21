document.addEventListener("DOMContentLoaded", function () {
  document.querySelectorAll(".swiper").forEach((swiperElement) => {
    new Swiper(swiperElement, {
      slidesPerView: 6,
      spaceBetween: 10,
      loop: true,
      /*autoplay: {
        delay: 3000,
        disableOnInteraction: true,
      },*/
      breakpoints: {
        320: { slidesPerView: 2 },
        576: { slidesPerView: 3 },
        768: { slidesPerView: 4 },
        992: { slidesPerView: 5 },
        1200: { slidesPerView: 6 },
      },
    });
  });
});
``;
