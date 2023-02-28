// Add imports above this line
import { galleryItems } from "./gallery-items";
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
// Change code below this line

console.log(galleryItems);
const gallery = document.querySelector(".gallery");

const collection = imgMarkup(galleryItems);
gallery.insertAdjacentHTML("beforeEnd", collection);
function imgMarkup(galleryItems) {
  return galleryItems
    .map(({ preview, description, original }) => {
      return `
     
      <a class="gallery__item" href="${original}">
  <img class="gallery__image" src="${preview}" alt="${description}" />
</a>
`;
    })
    .join(" ");
}

console.log(galleryItems);

const lightbox = new SimpleLightbox(".gallery a", {
  captionDelay: 250,

  captionsData: "alt",
});
