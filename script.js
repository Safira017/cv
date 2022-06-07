function initScroll() {
  const menu = document.querySelectorAll(".js_menu a");

  function realizarScroll(event) {
    event.preventDefault();
    const href = event.currentTarget.getAttribute("href");
    const content = document.querySelector(href);
    content.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  }

  menu.forEach((item) => {
    item.addEventListener("click", realizarScroll);
  });
}
initScroll();

function initAnimateScroll() {
  const sections = document.querySelectorAll(".js-scroll");
  const halfHeight = window.innerHeight * 0.6;

  function animateScroll() {
    sections.forEach((section) => {
      const sectionTop = section.getBoundingClientRect().top;
      const isSectionVisible = sectionTop - halfHeight < 0;
      if (isSectionVisible) {
        section.classList.add("ativo");
      } else {
        section.classList.remove("ativo");
      }
    });
  }
  animateScroll();
  window.addEventListener("scroll", animateScroll);
}
initAnimateScroll();
