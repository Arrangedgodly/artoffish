import { initialCards } from "./initialCards.js";
import { Card } from "./Card.js";
import { shuffle } from "../index.js";

const numberOfItems = initialCards.length;
const numberPerPage = 72;
const numberOfPages = Math.ceil(numberOfItems / numberPerPage);
const cards = document.querySelector(".cards");

shuffle(initialCards);

function getNumberOfPages(array) {
  const arrayLength = array.length;
  return Math.ceil(arrayLength / numberPerPage);
}

function retrievePageArray(currPage, array) {
  let trimStart;
  if (currPage === 1) {
    trimStart = 0;
  } else {
    trimStart = (currPage - 1) * numberPerPage;
  }
  
  const trimEnd = trimStart + numberPerPage;
  const cardArray = array.slice(trimStart, trimEnd);
  return cardArray;
}

export const buildPages = (array) => {
for (let i = 1; i < getNumberOfPages(array) + 1; i++) {
  const pageTemplate = document
    .querySelector("#page")
    .content.querySelector(".page")
    .cloneNode(true);
  pageTemplate.classList.add(`page-${i}`);
  if (i !== 1) {
    pageTemplate.classList.add("page-hidden");
  }

  const cardArray = retrievePageArray(i, array);
  cardArray.forEach((data) => {
    const card = new Card(data, "#card");
    const cardElement = card.generateCard();
    pageTemplate.append(cardElement);
  });

  cards.append(pageTemplate);
}
}

let projectCount = 0;
const leftArrow = document.querySelector(".fa-arrow-left");
const rightArrow = document.querySelector(".fa-arrow-right");

export function checkArrows(num) {
  if (num === 0) {
    leftArrow.setAttribute("style", "opacity: 0;");
    leftArrow.setAttribute("disabled", "true");
    checkPageStatus();
  } else if (num > 0) {
    leftArrow.setAttribute("style", "opacity: 1;");
    leftArrow.removeAttribute("disabled");
    checkPageStatus();
  };
  if ((num + 1) >= (numberOfPages)) {
    rightArrow.setAttribute("style", "opacity: 0;");
    rightArrow.setAttribute("disabled", "true");
    checkPageStatus();
  } else if ((num + 1 ) < (numberOfPages)) {
    rightArrow.setAttribute("style", "opacity: 1;");
    rightArrow.removeAttribute("disabled");
    checkPageStatus();
  }
}

export function changePages(num) {
  const activePage = document.querySelector(`.page-${projectCount + 1}`);
  const nextPage = document.querySelector(`.page-${projectCount + 2}`);
  const previousPage = document.querySelector(`.page-${projectCount}`);

  activePage.classList.add("page-hidden");
  if (num === 1) {
    if (nextPage === null) {
      activePage.classList.remove("page-hidden");
      return;
    }
    nextPage.classList.remove("page-hidden");
    projectCount++;
  }
  if (num === -1) {
    if (previousPage === null) {
      activePage.classList.remove("page-hidden");
      return;
    }
    previousPage.classList.remove("page-hidden");
    projectCount--;
  }

  checkArrows(projectCount);
}

export const handleRefreshButton = () => {
  shuffle(initialCards);
  cards.innerHTML = "";
  buildPages(initialCards);
  projectCount = 0;
  checkArrows(projectCount);
}

let sortCounter = 0;

export function handleSortButton() {
  cards.innerHTML = "";
  projectCount = 0;
  checkArrows(projectCount);
  if (sortCounter === 1) {
    initialCards.reverse();
    sortCounter--;
  }
  else if (sortCounter === 0) {
    initialCards.sort(function (a, b) {
      if (a.prompt < b.prompt) {
        return -1;
      }
      if (a.prompt > b.prompt) {
        return 1;
      }
      return 0;
    });
    sortCounter++;
    }
  buildPages(initialCards);
}

const checkPageStatus = () => {
  const pages = Array.from(document.querySelectorAll(".page"));
  pages.forEach((page) => {
    if (page.classList.contains("page-hidden")) {
      const cards = Array.from(page.querySelectorAll(".card"));
      cards.forEach((card) => {
        const cardImage = card.querySelector(".img");
        cardImage.setAttribute("loading", "lazy");
      });
    } else {
      const cards = Array.from(page.querySelectorAll(".card"));
      cards.forEach((card) => {
        const cardImage = card.querySelector(".img");
        cardImage.setAttribute("loading", "eager");
      });
    }
  })
}

class Pages {
  constructor({items, numberPerPage}) {
    this._items = items;
    this._numberPerPage = numberPerPage;
  }

  _getNumberOfPages() {
    const length = this._items.length;
    return Math.ceil(length / this._numberPerPage);
  }
}