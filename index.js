let sections = document.querySelectorAll("section");

window.onscroll = () => {
  let scrollY = window.scrollY;
  sections.forEach((sec) => {
    let offset = sec.offsetTop - 150;
    let height = sec.offsetHeight;

    if (scrollY >= offset && scrollY < offset + height) {
      sec.classList.add("show-animate");
    } else {
      sec.classList.remove("show-animate");
    }
  });
};
