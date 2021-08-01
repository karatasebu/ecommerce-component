import free from "../assets/svg/free.svg";

export default function renderCard(product) {
  const popupEl = document.querySelector("#popup");
  const card = `
  <div class="card">
  <div class="card__section">
  <img class="card__img" loading="lazy" src="${product.image}" alt="${
    product.name
  }"/>
  <p class="card__title">${product.name}</p>
  </div>
  <div class="card__section -bottom">
  <span class="card__price">${product.priceText}</span>
  ${
    product.params.shippingFee === "FREE"
      ? `<div class="card__shipping">
      <img src="${free}" alt="shipping"></img><p>Ücretsiz Kargo</p>
      </div>`
      : ""
  }
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
