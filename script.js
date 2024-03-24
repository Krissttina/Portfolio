// const toTop = document.querySelector('#to-top');

// window.addEventListener("scroll", () => {
//     if(window.screenY > 100) {
//         toTop.classList.add("active");
//     } else {
//         toTop.classList.remove("active");
//     }
// });

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.getElementById("scrollToTopBtn").style.display = "block";
  } else {
    document.getElementById("scrollToTopBtn").style.display = "none";
  }
}

function scrollToTop() {
  document.body.scrollTop = 0; /* For Safari */
  document.documentElement.scrollTop = 0; /* For Chrome, Firefox, IE, and Opera */
}
