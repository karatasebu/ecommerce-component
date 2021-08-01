import renderCard from "./Card";
import slider from "./Slider";

export default function renderList(products, activeTab) {
  const listEl = document.querySelector("#list");
  let current = Object.keys(products).filter((el) => el.includes(activeTab));
  let list = "";

  for (let i = 0; i < products[current].length; i++) {
    list += renderCard(products[current][i]);
  }
  listEl.innerHTML = list;

  slider(listEl);
}
