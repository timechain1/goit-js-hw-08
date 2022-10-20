import { galleryItems } from "./gallery-items";
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

const galleryContainer = document.querySelector(".gallery");
const imagesGallery = createGallaryCardsItems(galleryItems);

galleryContainer.insertAdjacentHTML("beforeend", imagesGallery);

function createGallaryCardsItems(galleryItems) {
  return galleryItems.map(({ original, preview, description }) => {
      return `<div class="gallery__item">
        <a class="gallery__link" href="${original}">
        <img class="gallery__image"
            src="${preview}"
            data-source="${original}"
            alt="${description}" />
        </a>
    </div>`;
    }).join("");}

new SimpleLightbox(".gallery a", {
  captionsData: "alt",
  captionDelay: 250,
  captionPosition: "bottom",
});
console.log(galleryItems);