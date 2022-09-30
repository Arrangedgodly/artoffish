const popup = document.querySelector(".modal");
const popupImg = popup.querySelector(".img-large");
const popupText = popup.querySelector(".text-modal");

export class Card {
  constructor(data, cardSelector) {
    this._prompt = data.prompt;
    this._link = data.link;

    this._cardSelector = cardSelector;
  }

  _getTemplate() {
    return document
      .querySelector(this._cardSelector)
      .content
      .querySelector(".card")
      .cloneNode(true);
  }

  _handleOpenModal() {
    popupImg.src = this._link;
    popupImg.alt = this._prompt;
    popupText.textContent = `Prompt: "${this._prompt}"`;
    popup.classList.add("modal_opened");
  }

  _setEventListeners() {
    this._cardImage.addEventListener("click", () => this._handleOpenModal());
  }

  generateCard() {
    this._element = this._getTemplate();
    this._cardImage = this._element.querySelector(".img");

    this._cardImage.src = this._link;
    this._cardImage.alt = `Prompt: "${this._prompt}"`;
    this._cardImage.title = this._prompt;

    this._setEventListeners();

    return this._element;
  }
}