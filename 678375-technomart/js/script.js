var linkMessage = document.querySelector(".button-message");
var popupForm = document.querySelector(".message-form");
var closeForm = document.querySelector(".form-close");

linkMessage.addEventListener("click", function (evt) {
  evt.preventDefault();
  popupForm.classList.add("modal-show");
});

closeForm.addEventListener("click", function (evt) {
  evt.preventDefault();
  popupForm.classList.remove("modal-show");
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    evt.preventDefault();
    if (popupForm.classList.contains("modal-show")) {
      popupForm.classList.remove("modal-show");
    }
  }
});

var linkMap = document.querySelector(".mini-map");
var popupMap = document.querySelector(".popup-map");
var closeMap = document.querySelector(".map-close");

linkMap.addEventListener("click", function (evt) {
  evt.preventDefault();
  popupMap.classList.add("modal-show-map");
});

closeMap.addEventListener("click", function (evt) {
  evt.preventDefault();
  popupMap.classList.remove("modal-show-map");
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    evt.preventDefault();
    if (popupMap.classList.contains("modal-show-map")) {
      popupMap.classList.remove("modal-show-map");
    }
  }
});

// не работает - товар добавлен в карзину - только по первову селектору
// var linkOrder = document.querySelectorAll(".perforators-model-item .button-goods-buy");
var linkOrder = document.querySelector(".button-goods-buy");
var popupOrder = document.querySelector(".popup-order");
var closeOrder = document.querySelector(".popup-order-close");

linkOrder.addEventListener("click", function (evt) {
  evt.preventDefault();
  popupOrder.classList.add("modal-show-map");
});

closeOrder.addEventListener("click", function (evt) {
  evt.preventDefault();
  popupOrder.classList.remove("modal-show-map");
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    evt.preventDefault();
    if (popupOrder.classList.contains("modal-show-map")) {
      popupOrder.classList.remove("modal-show-map");
    }
  }
});
