import getData from "./request";
import renderNav from "./components/Nav";
import renderList from "./components/List";

async function init() {
  const data = await getData();

  renderNav(data.categories, data.products);
  renderList(data.products, data.categories[0]);
}

init();
