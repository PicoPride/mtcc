document.addEventListener("DOMContentLoaded", function () {
  // Initialize .mySwiper
  new Swiper(".mySwiper", {
    slidesPerView: "auto",
    spaceBetween: 15,
    centeredSlides: true,
    loop: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: `.swiper-button-next`,
      prevEl: `.swiper-button-prev`,
    },
    breakpoints: {
      0: {
        slidesPerView: 1,
        spaceBetween: 13,
      },
      768: {
        slidesPerView: 1.1,
      },
    },
  });

  // var swiper = new Swiper(".like-slider", {
  //   slidesPerView: 5,
  //   cssMode: true,
  //   spaceBetween: 10,
  //   pagination: {
  //     el: ".swiper-pagination",
  //     clickable: true,
  //   },
  //   navigation: {
  //     nextEl: ".swiper-button-next",
  //     prevEl: ".swiper-button-prev",
  //   },
  //   breakpoints: {
  //     0: {
  //       slidesPerView: 1.2,
  //       spaceBetween: 13,
  //     },
  //     768: {
  //       slidesPerView: 5.2,
  //     },
  //   },
  // });
  

  







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
      // pagination: {
      //   el: `.swiper-pagination-${index}`,
      //   clickable: true,
      // },
      breakpoints: {
        0: {
          slidesPerView: 1.3,
          spaceBetween: 10,
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








  document.addEventListener('DOMContentLoaded', function() {
    const scrollContainer = document.querySelector('.scroll-container .items');
    
    // Retrieve the scroll position from local storage
    const scrollPosition = localStorage.getItem('scrollPosition');
    
    // If a scroll position was saved, set the scroll position
    if (scrollPosition) {
      scrollContainer.scrollLeft = scrollPosition;
    }

    // Save the scroll position in local storage whenever it changes
    scrollContainer.addEventListener('scroll', function() {
      localStorage.setItem('scrollPosition', scrollContainer.scrollLeft);
    });
  });
