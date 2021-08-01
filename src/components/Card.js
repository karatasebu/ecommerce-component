import free from "../assets/svg/free.svg";
import nonfree from "../assets/svg/non-free.svg";

export default function renderCard(product) {
  const popupEl = document.querySelector("#popup");
  const card = `
  <div class="card">
  <div class=card__section>
  <img class="card__img" loading="lazy" src="${product.image}" alt="${
    product.name
  }"/>
  <p class="card__title">${product.name}</p>
  </div>
  <div class=card__section>
  <span class="card__price">${product.priceText}</span>
  <div class="card__shipping">${
    product.params.shippingFee === "FREE"
      ? `<img src="${free}" alt="shipping"></img><p>Ücretsiz Kargo</p>`
      : `<img src="${nonfree}" alt="shipping"></img><p>Ücretli Kargo</p>`
  }</div>
  <button class="card__btn" onclick="addItem()">Sepete Ekle</button>
  </div>
  </div>
  `;

  window.addItem = () => {
    if (!popupEl.classList.contains("-added")) {
      popupEl.classList.add("-added");
      setTimeout(() => {
        closePopup();
      }, 2000);
    }
  };
  window.closePopup = () => {
    popupEl.classList.remove("-added");
  };

  return card;
}
