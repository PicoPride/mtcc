


document.addEventListener("DOMContentLoaded", function () {
  
  new Swiper(".mySwiper", {
    slidesPerView: "auto",
    spaceBetween: 15,
    centeredSlides: true,
    loop: true,
    pagination: {
      el: ".main-slider-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".main-slider-next",
      prevEl: ".main-slider-prev",
    },
    breakpoints: {
      0: {
        slidesPerView: 1.25,
        spaceBetween: 13,
      },
      768: {
        slidesPerView: 1.1,
      },
    },
  });

  // Swiper instance for .like-slider
  new Swiper(".like-slider", {
    slidesPerView: 5,
    cssMode: true,
    spaceBetween: 10,
    pagination: {
      el: ".like-slider-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".like-slider-button-next",
      prevEl: ".like-slider-button-prev",
    },
    breakpoints: {
      0: {
        slidesPerView: 1.2,
        spaceBetween: 13,
      },
      768: {
        slidesPerView: 5.2,
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

document.addEventListener("DOMContentLoaded", function () {
  const scrollContainer = document.querySelector(".scroll-container .items");

  // Retrieve the scroll position from local storage
  const scrollPosition = localStorage.getItem("scrollPosition");

  // If a scroll position was saved, set the scroll position
  if (scrollPosition) {
    scrollContainer.scrollLeft = scrollPosition;
  }

  // Save the scroll position in local storage whenever it changes
  scrollContainer.addEventListener("scroll", function () {
    localStorage.setItem("scrollPosition", scrollContainer.scrollLeft);
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const texts = document.querySelectorAll(".changing-text");
  let index = 0;

  // Initially show the first text
  texts[index].classList.add("active");

  function toggleText() {
    // Hide the current active text
    texts[index].classList.remove("active");

    // Move to the next text index
    index = (index + 1) % texts.length;

    // Show the new active text after a short delay
    setTimeout(() => {
      texts[index].classList.add("active");
    }, 100); // Adjust this delay to match your transition duration
  }

  setInterval(toggleText, 2500); // Toggle every 5 seconds (5000 milliseconds)
});

function showTab(tabName) {
  var i;
  var x = document.getElementsByClassName("content");
  var tabs = document.getElementsByClassName("tab");
  for (i = 0; i < x.length; i++) {
    x[i].classList.remove("active");
  }
  for (i = 0; i < tabs.length; i++) {
    tabs[i].classList.remove("active");
  }
  document.getElementById(tabName).classList.add("active");
  event.target.classList.add("active");
}




// Code for adding and removing active class based on the current url
  document.addEventListener("DOMContentLoaded", function() {
    var menuItems = document.querySelectorAll('.second-menu a');
    var currentUrl = window.location.pathname.split("/").pop();

    menuItems.forEach(function(item) {
      item.classList.remove('active');
    });

    menuItems.forEach(function(item) {
      if (item.getAttribute('href') === currentUrl) {
        item.classList.add('active');
      }
    });
  });




// Code for Menu in Mobile
document.addEventListener("DOMContentLoaded", function() {
  const hamburgerContainer = document.querySelector('.mobile-hamburger');
  const mobileMenu = document.querySelector('.mobile-menu');
  const closeMenuIcon = document.querySelector('.close-menu img');
  const hamburgerIcon = document.querySelector('.mobile-hamburger');

  function toggleMenu() {
    const isMenuOpen = mobileMenu.classList.contains('show');

    if (isMenuOpen) {
      closeMenu();
    } else {
      openMenu();
    }
  }

  function openMenu() {
    mobileMenu.classList.add('show');
    mobileMenu.classList.remove('hide');
    hamburgerContainer.classList.add('cross');
    hamburgerIcon.src = "./assets/imgs/close.svg"; // Update with the path to the close icon image
  }

  function closeMenu() {
    mobileMenu.classList.remove('show');
    mobileMenu.classList.add('hide');
    hamburgerContainer.classList.remove('cross');
    hamburgerIcon.src = "./assets/imgs/breadcrumb.svg"; // Update with the path to the hamburger icon image
  }

  // Toggle menu on hamburger click
  hamburgerContainer.addEventListener('click', toggleMenu);

  // Close menu on close icon click
  if (closeMenuIcon) {
    closeMenuIcon.addEventListener('click', closeMenu);
  }

  // Close the menu when clicking outside
  document.addEventListener('click', function(event) {
    if (!mobileMenu.contains(event.target) && 
        !hamburgerContainer.contains(event.target)) {
      closeMenu();
    }
  });

  // Close the menu on scroll if open
  window.addEventListener('scroll', function() {
    if (mobileMenu.classList.contains('show')) {
      closeMenu();
    }
  });
});

  



document.addEventListener('DOMContentLoaded', () => {
  const numbersContainer = document.querySelector('.numbers');
  const numbers = Array.from(numbersContainer.querySelectorAll('h2'));
  const rightHostCardContainer = document.querySelector('.right-host-card');
  const rightHostCards = Array.from(rightHostCardContainer.querySelectorAll('.host-card'));
  const leftArrow = document.querySelector('.left-arrow');
  const rightArrow = document.querySelector('.right-arrow');
  let currentIndex = 0;
  const visibleCount = 4;
  function updateVisibleItems() {
    // Update numbers visibility
    numbers.forEach((number, index) => {
      number.style.display = (index >= currentIndex && index < currentIndex + visibleCount) ? 'block' : 'none';
    });

    // Scroll the host cards container
    const cardWidth = rightHostCards[0].offsetWidth + 20; // 20 is the margin-right
    rightHostCardContainer.style.transform = `translateX(-${currentIndex * cardWidth}px)`;
  }

  leftArrow.addEventListener('click', () => {
    if (currentIndex > 0) {
      currentIndex -= visibleCount;
      updateVisibleItems();
    }
  });

  rightArrow.addEventListener('click', () => {
    if (currentIndex + visibleCount < numbers.length) {
      currentIndex += visibleCount;
      updateVisibleItems();
    }
  });

  updateVisibleItems(); // Initial call to set visible items
});

// Application form upload Support

document.getElementById('uploadDocument').addEventListener('click', function() {
  document.getElementById('fileInput').click();
});

document.getElementById('fileInput').addEventListener('change', function(event) {
  const file = event.target.files[0];
  if (file) {
    console.log('File selected:', file.name);
    
  }
});



