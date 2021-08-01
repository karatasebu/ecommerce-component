export default function slider(list) {
  const prevBtnEl = document.querySelector("#prev");
  const nextBtnEl = document.querySelector("#next");
  let position = null;
  list.clientWidth > 960 ? (position = 960) : (position = 480);

  nextBtnEl.addEventListener("click", function () {
    prevBtnEl.disabled = false;
    list.scrollLeft += position;
    if (list.scrollLeft + list.clientWidth * 1.7 > list.scrollWidth) {
      this.disabled = true;
    }
  });
  prevBtnEl.addEventListener("click", function () {
    nextBtnEl.disabled = false;
    list.scrollLeft -= position;
    if (list.scrollLeft < list.clientWidth) {
      this.disabled = true;
    }
  });
}
