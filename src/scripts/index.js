import "./vendor/normalize.css";
import "./styles/index.css";
import { initialCards } from "./scripts/initialCards.js";
import { fishImages } from "./scripts/fishImages.js";
import { buildPages, checkArrows, changePages, handleRefreshButton, handleSortButton } from "./scripts/page.js";
import { escapeKeyHandler } from "./scripts/utlis.js";

const headerProjectCount = document.querySelector(".text-subdesc");
headerProjectCount.textContent = `${initialCards.length} Images and Counting`;

const cards = document.querySelector(".cards");

export function shuffle(array) {
  let currentIndex = array.length,  randomIndex;

  while (currentIndex != 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex], array[currentIndex]];
  }

  return array;
}

shuffle(initialCards);

const leftHeaderImage = document.querySelector(".img-head-left");
const rightHeaderImage = document.querySelector(".img-head-right");

function changeHeaderImages() {
  shuffle(fishImages);
  leftHeaderImage.src = fishImages[5].link;
  rightHeaderImage.src = fishImages[10].link;
}

setInterval(changeHeaderImages, 1000);

let projectCount = 0;
const leftArrow = document.querySelector(".fa-arrow-left");
const rightArrow = document.querySelector(".fa-arrow-right");

buildPages(initialCards);
checkArrows(projectCount);

rightArrow.addEventListener("click", () => changePages(1));
leftArrow.addEventListener("click", () => changePages(-1));

const refreshButton = document.querySelector(".refresh");
refreshButton.addEventListener("click", handleRefreshButton);

let sortCounter = 0;
const sortButton = document.querySelector(".sort");
sortButton.addEventListener("click", handleSortButton);

const searchForm = document.querySelector(".search-form");
const search = searchForm.querySelector(".search");

const searchCards = (data) => {
  const prompt = data.prompt.toLowerCase();
  const value = search.value.toLowerCase();
  if (prompt.includes(value)) {
    return true;
  }
  else {
    return false;
  }
}

search.addEventListener("keyup", () => {
  cards.innerHTML = "";
  projectCount = 0;
  checkArrows(projectCount);
  const searchedArray = [];
  initialCards.forEach(element => {
    if (searchCards(element) === true) {
      searchedArray.push(element);
    }
  });
  buildPages(searchedArray);
});

searchForm.addEventListener("submit", (evt) => {
  evt.preventDefault();
})

document.addEventListener("keydown", escapeKeyHandler);

document.addEventListener("mouseup", (e) => {
  let openedModal = document.querySelector(".modal_opened");
  if (openedModal === null) {return;}
  else if (e.target === openedModal) {
    openedModal.classList.remove("modal_opened");
  };
});