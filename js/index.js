const dropIcon = document.querySelector(".coin-drop");
const buyModal = document.querySelector(".buy__modal");
const buyCoin = document.querySelector(".buy-coin");
const coinsToDrop = document.querySelector(".coins-dropdown");

dropIcon.addEventListener("click", () => {
  dropIcon.classList.toggle("rotate-icon");
  coinsToDrop.classList.toggle("hide-coins");
  coinsToDrop.classList.toggle("hide");
});

buyCoin.addEventListener("click", () => {
  buyModal.classList.remove("hide");
  buyModal.classList.add("show_buy__modal");
});

buyModal.addEventListener("click", (e) => {
  buyModal.classList.add("hide");
  buyModal.classList.remove("show_buy__modal");
});
buyModal.firstElementChild.addEventListener("click", (e) => {
  e.stopPropagation(true);
});

const orderGraphStatusButton = document.querySelector(".charts");
const orderbookStatusButton = document.querySelector(".orderbook");
// const recentBookStatusButton = document.querySelector(".recent-book");

const orderGraphStatus = document.querySelector(
  ".main__content-filter-component"
);
const orderbookStatus = document.querySelector(".contain-orders");
// const recentBookStatusButton = document.querySelector(".recent-book");

orderGraphStatusButton.addEventListener("click", () => {
  orderGraphStatus.classList.remove("hide");
  orderbookStatus.classList.add("hide");
  orderGraphStatusButton.classList.add("active");
  orderbookStatusButton.classList.remove("active");

  // recentBookStatus.classList.add("hide");
});

orderbookStatusButton.addEventListener("click", () => {
  orderGraphStatus.classList.add("hide");
  orderbookStatus.classList.remove("hide");
  orderGraphStatusButton.classList.remove("active");

  orderbookStatusButton.classList.add("active");

  // recentBookStatus.classList.add("hide");
});
