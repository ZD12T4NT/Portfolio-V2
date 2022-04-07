// Animated navbar
const burger = document.querySelector('.burger');
const nav = document.querySelector('.nav');

burger.addEventListener('click', () => {
    burger.classList.toggle('toggle');
    nav.classList.toggle('nav-active');
});



// Reveal on scroll
window.addEventListener('scroll', reveal);// Selecting the window and adding the event listener of scroll with a name of reveal for the function

function reveal () {
    let reveals = document.querySelectorAll('.reveal');// Selecting all the elements with the class of .reveal

    for(let i = 0; i< reveals.length; i++) {
        let windowHeight = window.innerHeight;// Setting the window height to the inner window
        let revealTop = reveals[i].getBoundingClientRect().top;
        let revealPoint = 150;

        if(revealTop < windowHeight - revealPoint) {
            reveals[i].classList.add('active');// Once revealed the class of active will appear
        } else {
            reveals[i].classList.remove('active');// If out of reveal view, then remove the class
        }
    }
}



// Scroll to the top function 
const showOnPx = 100;
const backToTopButton = document.querySelector("#myBtn");

const scrollContainer = () => {
  return document.documentElement || document.body;
};

const goToTop = () => {
  document.body.scrollIntoView({
    behavior: "smooth"
  });
};

document.addEventListener("scroll", () => {
  console.log("Scroll Height: ", scrollContainer().scrollHeight);
  console.log("Client Height: ", scrollContainer().clientHeight);

  const scrolledPercentage =
    (scrollContainer().scrollTop /
      (scrollContainer().scrollHeight - scrollContainer().clientHeight)) *
    100;


  if (scrollContainer().scrollTop > showOnPx) {
    backToTopButton.classList.remove("hidden");
  } else {
    backToTopButton.classList.add("hidden");
  }
});

backToTopButton.addEventListener("click", goToTop);


// More projects
const more = document.getElementById('more');
const moreProj = document.querySelector('.more');

more.addEventListener('click', () => {
  moreProj.classList.toggle('more').style.display = 'block'
})

