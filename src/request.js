import "regenerator-runtime/runtime";
const path = "./product-list.json";

export default async function getData() {
  let response = await fetch(path);
  let data = await response.json();
  const categories = data.responses[0][0].params.userCategories.map((el) =>
    el.includes(">") ? el.split("> ")[1] : el
  );
  const products = data.responses[0][0].params.recommendedProducts;

  return {
    categories: categories,
    products: products,
  };
}
