import data from "./assets/data/product-list.json";
import renderNav from "./components/Nav";
import renderList from "./components/List";

function init() {
  const categories = data.responses[0][0].params.userCategories.map((el) =>
    el.includes(">") ? el.split("> ")[1] : el
  );
  const products = data.responses[0][0].params.recommendedProducts;

  renderNav(categories, products);
  renderList(products, categories[0]);
}

init();
