const cardTemplate = document.querySelector("#card-template").content;

const deleteCard = (evt) => evt.target.parentElement.remove();
const placesList = document.querySelector(".places__list");

const createCard = (deleteCard, item) => {
  const cardElement = cardTemplate.querySelector(".card").cloneNode(true);
  const cardImage = cardElement.querySelector(".card__image");
  const cardTitle = cardElement.querySelector(".card__title");
  const cardDeleteButton = cardElement.querySelector(".card__delete-button");

  cardImage.setAttribute("src", item.link);
  cardImage.setAttribute("alt", item.name);
  cardTitle.textContent = item.name;

  cardDeleteButton.addEventListener("click", deleteCard);
  return cardElement;
};

const addCard = (renderCard) => {
  placesList.append(renderCard);
};

const renderInitialCards = (...initialCards) => {
  initialCards[0].forEach((item) => {
    addCard(createCard(deleteCard, item));
  });
};
renderInitialCards(initialCards);
