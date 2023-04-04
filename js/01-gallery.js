import { galleryItems } from './gallery-items.js';

const galleryEl = document.querySelector(".gallery");
let imageFromLightbox;

for (const item of galleryItems) {
  const imageEl = document.createElement("li");
  imageEl.classList.add("gallery__item");
  imageEl.insertAdjacentHTML(
    "afterbegin",
    `
    <a class="gallery__link" href="${item.original}">
      <img class="gallery__image" src="${item.preview}" data-source="${item.original}" alt="${item.description}">
    </a>
    `
  );
  galleryEl.append(imageEl);
};

const showImage = (event) => {
  if (event.target.nodeName !== "IMG") {
    return;
  } else {
    event.preventDefault();
    imageFromLightbox = basicLightbox.create(`<img src="${event.target.dataset.source}">`);
    imageFromLightbox.show();
  };
};

const closeImage = (event) => {
  if (event.key === "Escape" || event.keyCode === 27) {
    imageFromLightbox.close();
  };
};

galleryEl.addEventListener("click", showImage);
document.addEventListener("keydown", closeImage);
