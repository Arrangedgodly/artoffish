const modal = document.querySelector(".modal");

export function escapeKeyHandler(evt) {
  if (evt.keyCode === 27) {
    modal.classList.remove("modal_opened");
  }
}