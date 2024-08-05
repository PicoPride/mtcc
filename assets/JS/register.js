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





  
//   document.addEventListener('DOMContentLoaded', () => {
//     const tabHeadings = document.querySelectorAll('.tab-heading');
//     const tabContents = document.querySelectorAll('.tab-content');

//     tabHeadings.forEach(heading => {
//         heading.addEventListener('click', () => {
//             const targetId = heading.id + '-meta';

            
//             tabContents.forEach(content => {
//                 content.classList.remove('active');
//             });

            
//             const targetContent = document.getElementById(targetId);
//             if (targetContent) {
//                 targetContent.classList.add('active');
//             }
//         });
//     });


//     const firstTab = document.getElementById('tab-first-meta');
//     if (firstTab) {
//         firstTab.classList.add('active');
//     }
// });


// document.addEventListener('DOMContentLoaded', () => {
//     const tabHeadings = document.querySelectorAll('.tab-heading');
//     const tabContents = document.querySelectorAll('.tab-content');

//     tabHeadings.forEach(heading => {
//         heading.addEventListener('click', () => {
//             const targetId = heading.id + '-meta';

//             // Remove 'active' class from all tab contents
//             tabContents.forEach(content => {
//                 content.classList.remove('active');
//             });

//             // Remove 'active-tab' class from all tab headings
//             tabHeadings.forEach(heading => {
//                 heading.classList.remove('active-tab');
//             });

//             // Add 'active' class to the relevant tab content
//             const targetContent = document.getElementById(targetId);
//             if (targetContent) {
//                 targetContent.classList.add('active');
//             }

//             // Add 'active-tab' class to the clicked tab heading
//             heading.classList.add('active-tab');
//         });
//     });

//     // Set the first tab and its content as active on page load
//     const firstTabContent = document.getElementById('tab-first-meta');
//     if (firstTabContent) {
//         firstTabContent.classList.add('active');
//     }
//     const firstTabHeading = document.getElementById('tab-first');
//     if (firstTabHeading) {
//         firstTabHeading.classList.add('active-tab');
//     }
// });



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
