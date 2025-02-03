export const handleScrollToTop = () => {
  const offset = 300;
  const duration = 400;

  window.addEventListener("scroll", function () {
    if (window.scrollY > offset) {
      document
        .querySelector(".home-hero-scroll-to-top")
        ?.classList.add("active");
    } else {
      document
        .querySelector(".home-hero-scroll-to-top")
        ?.classList.remove("active");
    }
  });

  document
    .querySelector(".home-hero-scroll-to-top")
    ?.addEventListener("click", function (event) {
      event.preventDefault();
      const start = window.scrollY;
      const startTime = performance.now();

      function animateScroll(currentTime: number) {
        const timeElapsed = currentTime - startTime;
        const progress = Math.min(timeElapsed / duration, 1); // Ensure progress doesn't exceed 1
        window.scrollTo(0, start * (1 - progress));

        if (progress < 1) {
          requestAnimationFrame(animateScroll);
        }
      }

      requestAnimationFrame(animateScroll);

      return false;
    });
};
