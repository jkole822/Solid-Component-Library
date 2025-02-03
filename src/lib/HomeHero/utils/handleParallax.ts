export const handleParallax = (backgroundImages: string[]) => {
  document.addEventListener("scroll", function () {
    const scrollPosition = window.scrollY;

    backgroundImages.forEach((image, index) => {
      document
        .querySelector(`.parallax-image-${index}`)
        ?.setAttribute(
          "style",
          `background-image: url(${image}); top: ${scrollPosition / (index - backgroundImages.length - 1.5)}px`,
        );
    });

    document
      .querySelector(".parallax-fade-top")
      ?.setAttribute(
        "style",
        `top: ${scrollPosition / 2}px; opacity: ${1 - scrollPosition / 700};`,
      );

    document
      .querySelector(".home-hero-shadow-title")
      ?.setAttribute("style", `top: ${scrollPosition / -2}px`);
  });
};
