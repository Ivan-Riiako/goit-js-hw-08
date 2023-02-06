// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line

import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const refs = {
  gallery: document.querySelector('div.gallery'),
};

function createPaletteItems() {
  const items = galleryItems
    .map(
      ({
        preview,
        original,
        description,
      }) => `<a class="gallery__item" href="${original}">
  <img class="gallery__image" src="${preview}" alt="${description}" />
</a>`
    )
    .join('');
  refs.gallery.insertAdjacentHTML('beforeend', items);
}
createPaletteItems();

var lightbox = new SimpleLightbox('.gallery a', {
  /* options */
  //   captions: true,
  //   captionSelector: "img",
  captionsData: 'alt',
  captionPosition: 'bottom',
  captionDelay: 250,
});
