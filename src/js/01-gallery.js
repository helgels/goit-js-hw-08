// Add imports above this line
import { galleryItems } from './gallery-items';
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
// Change code below this line

console.log(galleryItems);

const gallery = document.querySelector('.gallery');

const GalleryMarkUp = createGalleryMarkUp(galleryItems);
gallery.insertAdjacentHTML('beforeend', GalleryMarkUp);


function createGalleryMarkUp(galleryItems) {
  return galleryItems.map(
    ({ preview, original, description }) => {
      return `
      <a class="gallery__item" href="${original}"><img class="gallery__image" src="${preview}" alt="${description}" /></a>`;
    })
    .join("");
}

new SimpleLightbox('.gallery a', {
  captions: true,
  captionsData: 'alt',
  captionDelay: 250,
});