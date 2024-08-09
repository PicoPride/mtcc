document.addEventListener("DOMContentLoaded", () => {
    const logIn = document.getElementById("login")
    const loginBox = document.querySelector("#login-box");
    const registerBox = document.querySelector("#register-box");
    const request = document.getElementById("request");
  
    logIn.addEventListener("click", (event) => {
      event.preventDefault(); 
      loginBox.style.display = "block";
      registerBox.style.display = "none";
      console.log("Clicked");
    });


    request.addEventListener("click", (event) => {
        event.preventDefault(); 
        loginBox.style.display = "none";
        registerBox.style.display = "block";
        console.log("Clicked");
      });

  });


document.addEventListener('DOMContentLoaded', () => {
    const tabHeadings = document.querySelectorAll('.tab-heading');
    const tabContents = document.querySelectorAll('.tab-content');
    const cardContents = document.querySelectorAll('.card-contents');

    tabHeadings.forEach(heading => {
        heading.addEventListener('click', () => {
            const targetId = heading.id + '-meta';

            // Remove 'active' class from all tab contents
            tabContents.forEach(content => {
                content.classList.remove('active');
            });

            // Remove 'active-tab' class from all tab headings
            tabHeadings.forEach(heading => {
                heading.classList.remove('active-tab');
            });

            // Remove 'active-card' class from all card contents
            cardContents.forEach(card => {
                card.classList.remove('active-card');
            });

            // Add 'active' class to the relevant tab content
            const targetContent = document.getElementById(targetId);
            if (targetContent) {
                targetContent.classList.add('active');
            }

            // Add 'active-tab' class to the clicked tab heading
            heading.classList.add('active-tab');

            // Add 'active-card' class to the relevant card content
            const targetCardContent = document.getElementById(targetId + '-card');
            if (targetCardContent) {
                targetCardContent.classList.add('active-card');
            }
        });
    });

    // Set the first tab and its content as active on page load
    const firstTabContent = document.getElementById('tab-first-meta');
    if (firstTabContent) {
        firstTabContent.classList.add('active');
    }
    const firstTabHeading = document.getElementById('tab-first');
    if (firstTabHeading) {
        firstTabHeading.classList.add('active-tab');
    }
    const firstCardContent = document.getElementById('tab-first-meta-card');
    if (firstCardContent) {
        firstCardContent.classList.add('active-card');
    }
});









document.addEventListener('DOMContentLoaded', function() {
    // Tab toggling functionality
    const tabs = document.querySelectorAll('.exiciting-event-tab');
    const tabContentsFirst = document.querySelectorAll('.tab-content-first');
    const tabContentsSecond = document.querySelectorAll('.tab-content-second');
    const tabContentsThird = document.querySelectorAll('.tab-content-third');
    
    // Function to show active tab content
    function showTabContent(tabIndex) {
        tabContentsFirst.forEach((content, index) => {
            content.classList.toggle('active', index === tabIndex);
        });
        tabContentsSecond.forEach((content, index) => {
            content.classList.toggle('active', index === tabIndex);
        });
        tabContentsThird.forEach((content, index) => {
            content.classList.toggle('active', index === tabIndex);
        });
    }

    tabs.forEach((tab, index) => {
        tab.addEventListener('click', () => {
            // Remove active class from all tabs
            tabs.forEach(t => t.classList.remove('active-tab'));
            // Add active class to the clicked tab
            tab.classList.add('active-tab');
            // Show the corresponding tab content
            showTabContent(index);
        });
    });

    // Scroll functionality for each section
    function setupScroll(sectionClass) {
        const scrollLeftButtons = document.querySelectorAll(`.${sectionClass} .left-arrow`);
        const scrollRightButtons = document.querySelectorAll(`.${sectionClass} .right-arrow`);
        const scrollContainers = document.querySelectorAll(`.${sectionClass} .tab-right-side`);

        scrollLeftButtons.forEach((button, index) => {
            button.addEventListener('click', () => {
                scrollContainers[index].scrollBy({
                    left: -300, // Adjust scroll amount as needed
                    behavior: 'smooth'
                });
            });
        });

        scrollRightButtons.forEach((button, index) => {
            button.addEventListener('click', () => {
                scrollContainers[index].scrollBy({
                    left: 300, // Adjust scroll amount as needed
                    behavior: 'smooth'
                });
            });
        });
    }

    // Setup scroll for all sections
    setupScroll('tab-content-first');
    setupScroll('tab-content-second');
    setupScroll('tab-content-third');
});





document.querySelectorAll('.dashboard-option').forEach(option => {
    option.addEventListener('click', function() {
      // Remove active-option from all options
      document.querySelectorAll('.dashboard-option').forEach(opt => opt.classList.remove('active-option'));
      
      // Add active-option to the clicked option
      this.classList.add('active-option');
      
      // Hide all sections
      document.querySelectorAll('.content-container > div').forEach(section => section.classList.remove('active-tool'));
      
      // Show the corresponding section
      const targetClass = this.getAttribute('data-target');
      document.querySelector(targetClass).classList.add('active-tool');
    });
  });
  