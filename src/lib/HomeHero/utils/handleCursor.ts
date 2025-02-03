export const handleCursor = () => {
  const cursorOne = document.getElementById("cursor-one"),
    cursorTwo = document.getElementById("cursor-two"),
    cursorThree = document.getElementById("cursor-three");

  document
    .getElementsByTagName("body")[0]
    .addEventListener("mousemove", function (n) {
      cursorOne?.setAttribute(
        "style",
        `left: ${n.clientX}px; top: ${n.clientY}px`,
      );
      cursorTwo?.setAttribute(
        "style",
        `left: ${n.clientX}px; top: ${n.clientY}px`,
      );
      cursorThree?.setAttribute(
        "style",
        `left: ${n.clientX}px; top: ${n.clientY}px`,
      );
    });

  function addHover() {
    cursorTwo?.classList.add("hover");
    cursorThree?.classList.add("hover");
  }

  function removeHover() {
    cursorTwo?.classList.remove("hover");
    cursorThree?.classList.remove("hover");
  }

  function addMouseEvents(target: HTMLElement) {
    target.addEventListener("mouseover", addHover);
    target.addEventListener("mouseout", removeHover);
  }

  removeHover();

  for (
    let hoverTargets = document.querySelectorAll(".hover-target"),
      a = hoverTargets.length - 1;
    a >= 0;
    a--
  ) {
    //@ts-ignore
    addMouseEvents(hoverTargets[a]);
  }
};
