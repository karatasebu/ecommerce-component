import renderList from "./List";

export default function renderNav(categories, products) {
  const navEl = document.querySelector("#nav");

  for (let i = 0; i < categories.length; i++) {
    let tab = document.createElement("button");
    tab.innerHTML = categories[i];
    i === 0
      ? tab.classList.add("nav__tab", "-active")
      : tab.classList.add("nav__tab");
    navEl.appendChild(tab);

    tab.addEventListener("click", function () {
      let current = document.querySelector(".-active");
      current.classList.remove("-active");
      this.classList.add("-active");

      renderList(products, this.innerHTML);
    });
  }
}
