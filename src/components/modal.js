let currentPopupEscKeyHandler = null;

const handleKeyEscape = (evt, popup) => {
  if (evt.key === "Escape") {
    closePopup(popup);
  }
};

export function openPopup(popup) {
  popup.classList.add("popup_is-opened");
  currentPopupEscKeyHandler = (evt) => handleKeyEscape(evt, popup);
  document.addEventListener("keydown", currentPopupEscKeyHandler);
}

export function closePopup(popup) {
  popup.classList.remove("popup_is-opened");
  document.removeEventListener("keydown", currentPopupEscKeyHandler);
}

export function handleClickOutsideOfContent(evt, popup) {
  if (evt.target.classList.contains("popup")) {
    closePopup(popup);
  }
}

export const setModalWindowEventListeners = (modalWindow) => {
  modalWindow
    .querySelector(".popup__close")
    .addEventListener("click", () => closePopup(modalWindow));

  modalWindow.addEventListener("mousedown", (evt) =>
    handleClickOutsideOfContent(evt, modalWindow)
  );
};
