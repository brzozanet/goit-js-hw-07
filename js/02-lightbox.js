import { galleryItems } from './gallery-items.js';

const galleryEl = document.querySelector(".gallery");
let imageFromLightbox;

for (const item of galleryItems) {
  const imageEl = document.createElement("li");
  imageEl.insertAdjacentHTML(
    "afterbegin",
    `
    <a class="gallery__item" href="${item.original}">
      <img class="gallery__image" src="${item.preview}" alt="${item.description}">
    </a>
    `
  );
  galleryEl.append(imageEl);
};

const showImage = event => {
  if (event.target.nodeName !== "IMG") {
    return;
  } else {
    event.preventDefault();
    imageFromLightbox = new SimpleLightbox(".gallery a", {
      captionsData: "alt",
      captionDelay: 250,
    });

  }
};

galleryEl.addEventListener("click", showImage);
