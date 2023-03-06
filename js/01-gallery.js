import { galleryItems } from "./gallery-items.js";
// Change code below this line

// Cтворення та рендеринг розмiтки
console.log(galleryItems);
const divRef = document.querySelector(".gallery");
function createGallaryMarkup(items) {
  return items
    .map(
      (item) => `<div class="gallery__item">
            <a class="gallery__link" href="${item.original}">
            <img
             class="gallery__image"
             src="${item.preview}"
             data-source="${item.original}"
             alt="${item.description}"
             />
             </a>
             </div>`
    )
    .join("");
}

const addGallaryMarkup = createGallaryMarkup(galleryItems);

divRef.innerHTML = addGallaryMarkup;

divRef.addEventListener("click", onImageClick);

function onImageClick(evt) {
  blockStandartAction(evt);

  if (evt.target.nodeName !== "IMG") {
    return;
  }
  const instance = basicLightbox.create(`
    <img src="${evt.target.dataset.source}" width="800" height="600">
`);

  instance.show();

  divRef.addEventListener("keydown", (evt) => {
    if (evt.code === "Escape") {
      instance.close();
    }
  });
}

function blockStandartAction(evt) {
  evt.preventDefault();
}
