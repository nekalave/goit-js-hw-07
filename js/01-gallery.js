import { galleryItems } from './gallery-items.js';
import 'https://cdn.jsdelivr.net/npm/basiclightbox@5.0.4/dist/basicLightbox.min.js';

const targetUl = document.querySelector('.gallery')

const img = galleryItems.map(image =>`
<li class="gallery__item">
  <a class="gallery__link" href="${image.original}">
    <img
      class="gallery__image"
      src="${image.preview}"
      data-source="${image.original}"
      alt="${image.description}"
    />
  </a>
</li>
`).join('')

targetUl.insertAdjacentHTML('beforeend', img)


targetUl.addEventListener('click', event => {
    event.preventDefault();
    const { target } = event;
    if (target.nodeName !== 'IMG') return;
    const closeModalOnEsc = (event) => {
        if (event.key === 'Escape') {
            instance.close();
            document.removeEventListener('keydown', closeModalOnEsc);
        }
    };
    const instance = basicLightbox.create(`
    <img alt="${event.target.alt}" 
         src="${event.target.getAttribute('data-source')}" 
         width="800" height="600">
`, {
            onShow: () => {
                document.addEventListener('keydown', closeModalOnEsc);
            },
            onClose: () => {
                document.removeEventListener('keydown', closeModalOnEsc);
            }
        })
    instance.show()
});

console.log(galleryItems);

