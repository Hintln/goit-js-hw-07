import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const gallery = document.querySelector('ul.gallery');

const createGallery =

    galleryItems.map(({ preview, original, description }) =>
        `<li>
        <a class="gallery__item" 
        href= ${original}>
        <img class="gallery__image"
        src=${preview}
        alt=${description} />
        </a>
        </li>`);


gallery.insertAdjacentHTML('beforeend', createGallery.join(''));

gallery.addEventListener('click', openBigPicture);

function openBigPicture(e) {
    
    e.preventDefault()
    if (e.target.nodeName !== 'IMG') {
        return
    };

    var lightbox = new SimpleLightbox('.gallery .gallery__item', { captionsData: "alt", captionDelay: "250" });
}






// new SimpleLightbox('.some-element a', { /* options */ });

// $('.some-element a').simpleLightbox({ /* options */ });

// <div class="gallery">
//     <a href="images/image1.jpg"><img src="images/thumbs/thumb1.jpg" alt="" title=""/></a>
//     <a href="images/image2.jpg"><img src="images/thumbs/thumb2.jpg" alt="" title="Beautiful Image"/></a>
// </div>