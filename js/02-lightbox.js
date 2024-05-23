import { galleryItems } from './gallery-items.js';
import 'https://cdnjs.cloudflare.com/ajax/libs/simplelightbox/2.14.3/simple-lightbox.min.js';

const targetUl = document.querySelector('.gallery')

const img = galleryItems.map(image =>`
<li class="gallery__item">
  <a class="gallery__link" href="${image.original}">
    <img
      class="gallery__image"
      src="${image.preview}"
      alt="${image.description}"
    />
  </a>
</li>
`).join('')

targetUl.insertAdjacentHTML('beforeend', img)

const lightbox = new SimpleLightbox('.gallery a', {
    captions: true,
    captionsData: 'alt',
    captionDelay: 250,
});

console.log(galleryItems);