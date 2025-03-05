
import "./pages/index.css";
import { deleteCard, likeCard, createCard } from "./components/card.js";
import { closePopup, openPopup } from "./components/modal.js";
import { initialCards } from "./scripts/cards.js";

const placesList = document.querySelector(".places__list");
const editPopap = document.querySelector(".popup_type_edit");
const editButton = document.querySelector(".profile__edit-button");
const formEdit = document.forms["edit-profile"];
const profileTitle = document.querySelector(".profile__title");
const profileDescription = document.querySelector(".profile__description");
const newCardPopap = document.querySelector(".popup_type_new-card");
const newCardButton = document.querySelector(".profile__add-button");
const formNewCard = document.forms["new-place"];
const imagePopap = document.querySelector(".popup_type_image");

imagePopap.classList.add("popup_is-animated");
editPopap.classList.add("popup_is-animated");
newCardPopap.classList.add("popup_is-animated");

function handleEditFormSubmit(evt) {
  evt.preventDefault();
  profileTitle.textContent = formEdit.elements.name.value;
  profileDescription.textContent = formEdit.elements.description.value;
  closePopup(editPopap);
}

function handleNewCardFormSubmit(evt) {
  evt.preventDefault();
  const cardElement = createCard(
    formNewCard.elements["place-name"].value,
    formNewCard.elements.link.value,
    deleteCard,
    likeCard,
    openImagePopup
  );
  placesList.prepend(cardElement);
  formNewCard.reset();
  closePopup(newCardPopap);
}

function openImagePopup(img, name) {
  openPopup(imagePopap);
  imagePopap.querySelector(".popup__image").src = img;
  imagePopap.querySelector(".popup__image").alt = name;
  imagePopap.querySelector(".popup__caption").textContent = name;
}

initialCards.forEach(function (elem) {
  const cardElement = createCard(
    elem.name,
    elem.link,
    deleteCard,
    likeCard,
    openImagePopup
  );
  placesList.append(cardElement);
});

editButton.addEventListener("click", function () {
  openPopup(editPopap);
  formEdit.elements.name.value = profileTitle.textContent;
  formEdit.elements.description.value = profileDescription.textContent;
});

newCardButton.addEventListener("click", function () {
  openPopup(newCardPopap);
});

formEdit.addEventListener("submit", handleEditFormSubmit);

formNewCard.addEventListener("submit", handleNewCardFormSubmit);

export { imagePopap, editPopap, newCardPopap };
