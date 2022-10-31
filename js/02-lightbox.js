import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const gallery = document.querySelector('ul.gallery');

const createGallery =

    galleryItems.map(({ preview, original, description }) =>
        `<li>
        <a class="gallery__item" href="large-image.jpg">
        <img class="gallery__image" src="small-image.jpg" alt="Image description" />
        </a>
        </li>`);


        