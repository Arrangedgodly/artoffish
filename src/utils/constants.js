function shuffle(array) {
  let currentIndex = array.length,  randomIndex;

  while (currentIndex != 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex], array[currentIndex]];
  }

  return array;
}

function checkZero(val) {
  if (val === 0) {
      return false;
  }
  else {
      return true;
  }
}

function checkLast(val, pages) {
  if (val === pages) {
      return false;
  }
  else {
      return true;
  }
}

export {
  shuffle,
  checkZero,
  checkLast
}