"use strict";

const prevImg = document.querySelector(".prev");
const nextImg = document.querySelector(".next");
const getImage = document.querySelector(".view-image").children;
const getTotalImage = getImage.length;

let index = 0;

prevImg.addEventListener("click", () => {
  imageDirection("next");
});

nextImg.addEventListener("click", () => {
  imageDirection("prev");
});

function imageDirection(direction) {
  if (direction == "next") {
    index++;
    if (index == getTotalImage) {
      index = 0;
    }
  } else {
    if (index == 0) {
      index = getTotalImage - 1;
    } else {
      index--;
    }
  }

  for (let i = 0; i < getImage.length; i++) {
    getImage[i].classList.remove("main");
  }
  getImage[index].classList.add("main");
}
