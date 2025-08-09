// const scroll = new LocomotiveScroll({
//     el: document.querySelector('#main'),
//     smooth: true
// });

function ProjectSectionImages() {
  var projectsDiv = document.querySelectorAll(".projects");
  var fixedImage = document.querySelector("#fixedImage");

  projectsDiv.forEach((element) => {
    var imagesData = element.getAttribute("img-data");
    element.addEventListener("mousemove", function () {
      fixedImage.style.display = "block";
      fixedImage.style.backgroundImage = `url(${imagesData})`;
    });
    element.addEventListener("mouseleave", function () {
      fixedImage.style.display = "none";
    });
  });
}

function DPE() {
  var headings = document.querySelectorAll(".headingsss");
  var DPEImage = document.querySelector("#DPEImg");
  var paragraphText = document.querySelector("#paragraphText");
  var headingOne = document.querySelector("#headingOne");

  headingOne.style.paddingLeft = "0.5vw";
  headingOne.style.color = "white";

  headings.forEach((element) => {
    var projectImages = element.getAttribute("img");
    var textData = element.getAttribute("text");
    element.addEventListener("click", function () {
      DPEImage.style.backgroundImage = `url(${projectImages})`;
      headings.forEach((e) => {
        if (e.style.paddingLeft == "0.5vw") {
          e.style.color = "rgb(80, 74, 69)";
          e.style.paddingLeft = "3vw";
        }
      });
      element.style.paddingLeft = "0.5vw";
      element.style.color = "white";
      paragraphText.innerHTML = textData;
    });
  });
}

var swiper = new Swiper(".mySwiper", {
  slidesPerView: 1.7,
  spaceBetween: 10,
  freeMode: true,
  breakpoints: {
    768: {
      slidesPerView: 2.9,
      spaceBetween: 30,
    },
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

DPE();
ProjectSectionImages();
