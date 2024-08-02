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




// document.addEventListener("DOMContentLoaded", () => {
//   const logIn = document.getElementById("login");
//   const loginBox = document.querySelector("#login-box");
//   const registerBox = document.querySelector("#register-box");
//   const request = document.getElementById("request");

//   logIn.addEventListener("click", (event) => {
//     event.preventDefault();
//     loginBox.classList.remove("hidden");
//     registerBox.classList.add("hidden");
//   });

//   request.addEventListener("click", (event) => {
//     event.preventDefault();
//     loginBox.classList.add("hidden");
//     registerBox.classList.remove("hidden");
//   });
// });