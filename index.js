const imageContainer = document.querySelector("#image-container");
const next = document.querySelector("#next-image");
const prev = document.querySelector("#prev-image");

imageContainer.children[0].classList.remove("width-zero");

let intervalId = null;

next.addEventListener("click", (event) => {
  if (intervalIdPrev) {
    imageContainer.children[0].className = "width-max";
    imageContainer.children[1].className = "width-zero";
    intervalIdPrev = null;
  }
  if (intervalId) {
    clearInterval(intervalId);
    intervalId = null;
    const newEl = imageContainer.children[0].cloneNode(true);
    imageContainer.children[0].remove();
    imageContainer.insertAdjacentElement("beforeend", newEl);
  }

  imageContainer.children[0].className = "width-zero";
  imageContainer.children[1].className = "width-max";

  intervalId = setTimeout(() => {
    intervalId = null;
    const newEl = imageContainer.children[0].cloneNode(true);
    imageContainer.children[0].remove();
    imageContainer.insertAdjacentElement("beforeend", newEl);
  }, 1000);
});

let intervalIdPrev = null;
prev.addEventListener("click", (event) => {
  if (intervalId) {
    intervalId = null;
    const newEl = imageContainer.children[0].cloneNode(true);
    imageContainer.children[0].remove();
    imageContainer.insertAdjacentElement("beforeend", newEl);
  }
  const newEl =
    imageContainer.children[imageContainer.childElementCount - 1].cloneNode(
      true
    );
  imageContainer.children[imageContainer.childElementCount - 1].remove();
  imageContainer.insertAdjacentElement("afterbegin", newEl);
  intervalIdPrev = setTimeout(() => {
    imageContainer.children[0].className = "width-max";
    imageContainer.children[1].className = "width-zero";
    intervalIdPrev = null;
  }, 0);
});
