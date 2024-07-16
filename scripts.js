document.addEventListener("DOMContentLoaded", function () {
  // Initialize .mySwiper
  new Swiper(".mySwiper", {
    slidesPerView: "auto",
    spaceBetween: 30,
    centeredSlides: true,
    loop: true,
    effect: "fade",
    fadeEffect: {
      crossFade: true,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    breakpoints: {
      0: {
        slidesPerView: 1,
        spaceBetween: 13,
      },
      768: {
        slidesPerView: "auto",
      },
    },
  });

  // Initialize .milestone-swiper
  const milestoneSwipers = document.querySelectorAll(".milestone-swiper");
  milestoneSwipers.forEach((swiperEl, index) => {
    new Swiper(swiperEl, {
      slidesPerView: 1.75,
      centeredSlides: false,
      direction: "horizontal",
      speed: 1000,
      spaceBetween: 30,
      mousewheel: true,
      loop: false,
      pagination: {
        el: `.swiper-pagination-${index}`,
        clickable: true,
      },
      breakpoints: {
        0: {
          slidesPerView: 1.3,
        },
        768: {
          slidesPerView: 1.4,
          spaceBetween: 5,
        },
        1180: {
          slidesPerView: 1.5,
        },
        1500: {
          slidesPerView: 1.8,
        },
        1920: {
          slidesPerView: 1.75,
        },
        2001: {
          slidesPerView: 2,
        },
        2500: {
          slidesPerView: 3,
        },
        2900: {
          slidesPerView: 5,
        },
      },
    });
  });

  // Initialize .testimonials-swiper
  const testimonialSwipers = document.querySelectorAll(".testimonials-swiper");
  testimonialSwipers.forEach((swiperEl, index) => {
    new Swiper(swiperEl, {
      slidesPerView: 3.5,
      centeredSlides: false,
      spaceBetween: 10,
      loop: true,
      pagination: {
        el: `.swiper-pagination-${index}`,
        clickable: true,
      },
      navigation: {
        nextEl: `.swiper-button-next`,
        prevEl: `.swiper-button-prev`,
      },
      breakpoints: {
        0: {
          slidesPerView: 1.2,
        },
        768: {
          slidesPerView: 3.5,
        },
      },
    });
  });
});
