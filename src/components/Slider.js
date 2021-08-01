export default function slider(list) {
  const prevBtnEl = document.querySelector("#prev");
  const nextBtnEl = document.querySelector("#next");
  let scrollAmount = null;

  function init() {
    prevBtnEl.disabled = true;
    if (nextBtnEl.disabled) nextBtnEl.disabled = false;
    list.classList.remove("-scroll");
    list.scrollLeft = 0;
    list.clientWidth > 960 ? (scrollAmount = 960) : (scrollAmount = 480);
  }
  init();

  nextBtnEl.addEventListener("click", function () {
    list.classList.add("-scroll");
    prevBtnEl.disabled = false;
    list.scrollLeft += scrollAmount;
    if (list.scrollLeft + list.clientWidth * 1.7 > list.scrollWidth) {
      this.disabled = true;
    }
  });
  prevBtnEl.addEventListener("click", function () {
    nextBtnEl.disabled = false;
    list.scrollLeft -= scrollAmount;
    if (list.scrollLeft < list.clientWidth) {
      this.disabled = true;
    }
  });
}
