import { galleryItems } from "./gallery-items.js";
// Change code below this line

// Gains reference of the container
const galleryContainerRef = document.querySelector(".gallery");

// Renders gallery cards
function createGalleryItems(galleryItems) {
  return galleryItems
    .map(({ preview, original, description }) => {
      return `<div class="gallery__item">
  <a class="gallery__link" href="large-image.jpg">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</div>`;
    })
    .join("");
}

// Adds created markup to the 01-gallery.html
const galleryMarkup = createGalleryItems(galleryItems);
galleryContainerRef.insertAdjacentHTML("afterbegin", galleryMarkup);

// Adds eventListener to the gallaryContainer using delegation
galleryContainerRef.addEventListener("click", onImageClick);

// Functions

// Click handler
function onImageClick(evt) {
  evt.preventDefault();

  if (!evt.target.classList.contains("gallery__image")) {
    return;
  }

  let bigImageLink = evt.target.dataset.source;
  createModalWindow(bigImageLink);

  onEscapeCloseModal();
}

// Creates modal window using library
function createModalWindow(link) {
  const instance = basicLightbox.create(`
    <img src="${link}" width="800" height="600">
`);

  instance.show();
}

// Closes modal window using Escape button from keyboard
function onEscapeCloseModal() {
  window.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      instance.close();
    }
  });
}

// console.log(galleryItems);
